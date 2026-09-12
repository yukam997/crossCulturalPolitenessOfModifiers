// // import { initializeApp } from "firebase/app";
// // import { getFirestore, collection, getDocs } from "firebase/firestore";
// // var firebaseConfig = {
// //     apiKey: "AIzaSyAro_b9zwhENQUKvnSzb-TcA3FZF9qbA_E",
// //     authDomain: "hs-social-interaction-lab.firebaseapp.com",
// //     projectId: "hs-social-interaction-lab",
// // }
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app, "cross-cultural-politeness"); // <-- specify the database ID here

// // const snap = await getDocs(collection(db, "responses"));
// // snap.forEach(doc => console.log(doc.id, doc.data()));
// import { initializeApp } from "firebase-admin/app";
// import { cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// import { readFileSync } from "fs";

// const serviceAccount = JSON.parse(readFileSync("./serviceAccountKey.json"));
// const OUTPUT_PATH = "./trials_export.csv";
// const ARRAY_JOIN_DELIMITER = "; ";
// const app = initializeApp({
//   credential: cert(serviceAccount),
// });

// const db = getFirestore(app, "cross-cultural-politeness");
// const snap = await db.collection("responses").get();
// import { writeFileSync } from "fs";

// const results = [];

// snap.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
// writeFileSync("output.json", JSON.stringify(results, null, 2));

/**
 * Fetches all documents from a Firestore collection (database: cross-cultural-politeness)
 * and flattens each trial into one CSV row.
 *
 * Usage:
 *   1. npm install firebase-admin
 *   2. Put your service account key JSON next to this file, named serviceAccountKey.json
 *      (or update SERVICE_ACCOUNT_PATH below)
 *   3. Update COLLECTION_NAME below to match your Firestore collection name
 *   4. node export_trials_to_csv.js
 *
 * Output: trials_export.csv in the same folder
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync, writeFileSync } from "fs";

const SERVICE_ACCOUNT_PATH = "./serviceAccountKey.json";
const DATABASE_ID = "cross-cultural-politeness";
const COLLECTION_NAME = "responses"; // <-- change this to your actual collection name
const JP_OUTPUT_PATH = "./JP_trials.csv";
const EN_OUTPUT_PATH = "./EN_trials.csv";
const ARRAY_JOIN_DELIMITER = "; ";

// JP participant codes: 8 chars, uppercase letters + digits (see make_participant_code
// in the JP experiment, which excludes ambiguous chars I/L/O/0/1 -- but we match a bit
// more loosely here in case of manual entry, just requiring 8 uppercase alphanumerics).
const JP_ID_REGEX = /^[A-Z0-9]{8}$/;

// EN / Prolific PIDs: 24 chars, lowercase letters + digits.
const EN_ID_REGEX = /^[a-z0-9]{24}$/;

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  let str = typeof value === "object" ? JSON.stringify(value) : String(value);
  if (/[",\n]/.test(str)) {
    str = `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function flattenValue(value) {
  if (Array.isArray(value)) {
    return value
      .map((v) => (typeof v === "object" ? JSON.stringify(v) : String(v)))
      .join(ARRAY_JOIN_DELIMITER);
  }
  if (value !== null && typeof value === "object") {
    return JSON.stringify(value);
  }
  return value;
}

function writeCsv(path, rows) {
  const columnSet = new Set(["doc_id", "comments"]);
  rows.forEach((row) => {
    Object.keys(row).forEach((k) => columnSet.add(k));
  });
  const columns = Array.from(columnSet);

  const headerLine = columns.map(csvEscape).join(",");
  const dataLines = rows.map((row) =>
    columns.map((col) => csvEscape(flattenValue(row[col]))).join(",")
  );

  const csvContent = [headerLine, ...dataLines].join("\n");
  writeFileSync(path, csvContent, "utf8");

  console.log(`Wrote ${rows.length} rows across ${columns.length} columns to ${path}`);
}

async function main() {
  const serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));

  const app = initializeApp({
    credential: cert(serviceAccount),
  });

  const db = getFirestore(app, DATABASE_ID);

  const snap = await db.collection(COLLECTION_NAME).get();

  const jpRows = [];
  const enRows = [];
  const unmatchedIds = [];

  snap.forEach((doc) => {
    const docId = doc.id;
    const data = doc.data();
    const trials = Array.isArray(data.trials) ? data.trials : [];

    let bucket;
    if (JP_ID_REGEX.test(docId)) {
      bucket = jpRows;
    } else if (EN_ID_REGEX.test(docId)) {
      bucket = enRows;
    } else {
      unmatchedIds.push(docId);
      return;
    }

    if (trials.length === 0) {
      // Still record participants with zero trials (e.g. comments-only docs).
      bucket.push({
        doc_id: docId,
        comments: data.comments ?? "",
      });
      return;
    }

    trials.forEach((trial) => {
      bucket.push({
        doc_id: docId,
        comments: data.comments ?? "",
        ...trial,
      });
    });
  });

  writeCsv(JP_OUTPUT_PATH, jpRows);
  writeCsv(EN_OUTPUT_PATH, enRows);

  if (unmatchedIds.length > 0) {
    console.log(`\n${unmatchedIds.length} doc ID(s) did not match either pattern:`);
    unmatchedIds.forEach((id) => console.log(`  ${id}`));
  } else {
    console.log("\nAll doc IDs matched either the JP or EN pattern.");
  }
}

main().catch((err) => {
  console.error("Error exporting trials:", err);
  process.exit(1);
});
