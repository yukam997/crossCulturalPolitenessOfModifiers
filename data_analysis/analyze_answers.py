"""
Analyze a trials CSV produced by export_trials_to_csv.js (e.g. JP_trials.csv
or EN_trials.csv).

Each row's "modifier_response_list" column holds the modifier(s) a
participant typed for that scenario, as a single string. Multiple answers
in that string can be separated by a semicolon (;) or by whitespace --
including Japanese full-width whitespace (U+3000, "　") -- so both are
treated as delimiters.

Does two things:
  1. Splits every row's modifier_response_list into individual answer
     strings and writes the full flattened list (including duplicates --
     i.e. every answer every participant submitted, not just the unique
     ones) to all_answers_array.csv. Also prints the unique answers found.
  2. For each relationship x attitude combination, aggregates every
     individual answer given by every participant into a frequency table
     (written to frequency_table.csv in "long" format: relationship,
     attitude, answer, count).

Usage:
    python analyze_answers.py JP_trials.csv
    python analyze_answers.py EN_trials.csv

If no argument is given, defaults to ./JP_trials.csv.

IMPORTANT: This script auto-detects the relationship/attitude/subject
columns by looking for common header names, and prints what it detected
before doing anything else -- check that output. The answer column is
expected to be named "modifier_response_list"; if your CSV uses a
different name, add it to CANDIDATES["answer"] below.
"""

import csv
import re
import sys
from collections import OrderedDict

INPUT_PATH_DEFAULT = "./EN_trials.csv"
ALL_ANSWERS_OUTPUT_PATH = "./EN_all_answers_array.csv"
FREQUENCY_TABLE_OUTPUT_PATH = "./EN_frequency_table.csv"

# Candidate header names for each canonical field, in order of preference.
# The first one found in the CSV's actual header row wins.
CANDIDATES = {
    "subject": ["doc_id", "subject_id", "participant_id", "prolific_pid"],
    "relationship": ["relationship", "Relationship", "relation"],
    "attitude": ["attitude", "Attitude"],
    "answer": ["modifier_response_list", "answer", "modifier", "response"],
}

# Split on one or more semicolons and/or Japanese full-width spaces
# (U+3000, "　"). A normal ASCII space bar is NOT a delimiter -- English
# answers can be multi-word phrases (e.g. "very cold") and should stay
# intact as a single answer.
SPLIT_PATTERN = re.compile(r"[;　]+")


def resolve_column(header, candidates):
    for name in candidates:
        if name in header:
            return name
    return None


def split_answers(raw):
    """Split a modifier_response_list cell into individual, non-empty,
    trimmed answer strings."""
    if raw is None:
        return []
    trimmed = str(raw).strip()
    if not trimmed:
        return []
    parts = SPLIT_PATTERN.split(trimmed)
    return [p for p in (part.strip() for part in parts) if p]


def main():
    input_path = sys.argv[1] if len(sys.argv) > 1 else INPUT_PATH_DEFAULT

    with open(input_path, "r", encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        rows = list(reader)

    if not rows:
        print(f"No rows found in {input_path}")
        return

    header = rows[0]
    data_rows = rows[1:]

    col = {
        "subject": resolve_column(header, CANDIDATES["subject"]),
        "relationship": resolve_column(header, CANDIDATES["relationship"]),
        "attitude": resolve_column(header, CANDIDATES["attitude"]),
        "answer": resolve_column(header, CANDIDATES["answer"]),
    }
    col_idx = {k: (header.index(v) if v else -1) for k, v in col.items()}

    print(f"Loaded {len(data_rows)} rows from {input_path}")
    print("Detected columns:")
    print(f"  subject:      {col['subject'] or 'NOT FOUND'}")
    print(f"  relationship: {col['relationship'] or 'NOT FOUND'}")
    print(f"  attitude:     {col['attitude'] or 'NOT FOUND'}")
    print(f"  answer:       {col['answer'] or 'NOT FOUND'}")
    print(f"Full header list: {', '.join(header)}")

    if col_idx["answer"] == -1:
        print(
            "\nCould not find a modifier_response_list column. Edit "
            "CANDIDATES['answer'] in this script to match one of the header "
            "names above, then re-run."
        )
        return

    all_answers = []  # every individual answer, in row order, duplicates included
    unique_answers = set()
    # relationship -> attitude -> answer -> count
    freq = OrderedDict()

    skipped_no_rel_att = 0
    skipped_empty = 0

    for row in data_rows:
        raw_answer = row[col_idx["answer"]] if col_idx["answer"] != -1 else ""
        answers = split_answers(raw_answer)
        relationship = (
            row[col_idx["relationship"]].strip() if col_idx["relationship"] != -1 else ""
        )
        attitude = row[col_idx["attitude"]].strip() if col_idx["attitude"] != -1 else ""

        if not answers:
            skipped_empty += 1
            continue

        for answer in answers:
            all_answers.append(answer)
            unique_answers.add(answer)

        if not relationship or not attitude:
            skipped_no_rel_att += 1
            continue

        freq.setdefault(relationship, OrderedDict()).setdefault(attitude, {})
        bucket = freq[relationship][attitude]
        for answer in answers:
            bucket[answer] = bucket.get(answer, 0) + 1

    # --- Step 1: unique answers ---
    sorted_unique = sorted(unique_answers)
    with open(ALL_ANSWERS_OUTPUT_PATH, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["answer"])
        for a in sorted_unique:
            writer.writerow([a])
    print(
        f"\nWrote {len(sorted_unique)} unique answers (out of {len(all_answers)} "
        f"total submitted) to {ALL_ANSWERS_OUTPUT_PATH}"
    )

    print(f"\n=== Unique answers ({len(sorted_unique)} total) ===")
    for a in sorted_unique:
        print(f"  {a}")

    # --- Step 2: relationship x attitude frequency table (long format) ---
    freq_rows = []
    for relationship in sorted(freq.keys()):
        for attitude in sorted(freq[relationship].keys()):
            answers = freq[relationship][attitude]
            for answer in sorted(answers.keys(), key=lambda a: (-answers[a], a)):
                freq_rows.append(
                    {
                        "relationship": relationship,
                        "attitude": attitude,
                        "answer": answer,
                        "count": answers[answer],
                    }
                )

    with open(FREQUENCY_TABLE_OUTPUT_PATH, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(
            f, fieldnames=["relationship", "attitude", "answer", "count"]
        )
        writer.writeheader()
        writer.writerows(freq_rows)

    print(
        f"Wrote {len(freq_rows)} (relationship, attitude, answer) rows to "
        f"{FREQUENCY_TABLE_OUTPUT_PATH}"
    )

    if skipped_empty:
        print(f"\nSkipped {skipped_empty} row(s) with an empty modifier_response_list.")
    if skipped_no_rel_att:
        print(
            f"Skipped {skipped_no_rel_att} row(s) missing relationship and/or "
            "attitude (e.g. practice trials) when building the frequency table "
            "(their answers are still included in all_answers_array.csv)."
        )


if __name__ == "__main__":
    main()
