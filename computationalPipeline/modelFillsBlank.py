import json
import re
import torch
import pandas as pd
from transformers import AutoTokenizer, AutoModelForMaskedLM

MODEL_NAME = "xlm-roberta-base"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForMaskedLM.from_pretrained(MODEL_NAME)
model.eval()

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)

# XLM-R uses <s>/</s>, but the tokenizer exposes them via the same
# cls_token_id/sep_token_id attribute names, so nothing else changes.
cls_id = tokenizer.cls_token_id
sep_id = tokenizer.sep_token_id


def load_stimuli(path):
    """stimuli.js is `var stimuliPool = [...]` -- strip the JS wrapper, parse as JSON."""
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    match = re.search(r"=\s*(\[.*\])\s*;?\s*$", raw, re.DOTALL)
    return json.loads(match.group(1))


def score_word_in_sentence(sentence, target_word):
    """PLL-word-l2r log-probability of target_word at its position in sentence."""
    idx = sentence.find(target_word)
    if idx == -1:
        raise ValueError(f"{target_word!r} not found in sentence")

    prefix = sentence[:idx]
    suffix = sentence[idx + len(target_word):]
    prefix_ids = tokenizer.encode(prefix, add_special_tokens=False)
    suffix_ids = tokenizer.encode(suffix, add_special_tokens=False)
    word_ids_full = tokenizer.encode(target_word, add_special_tokens=False)
    prefix_len = len(prefix_ids)
    k = len(word_ids_full)

    log_prob_sum = 0.0
    with torch.inference_mode():
        for i in range(k):
            word_ids = word_ids_full[:i] + [tokenizer.mask_token_id] * (k - i)
            full_ids = [cls_id] + prefix_ids + word_ids + suffix_ids + [sep_id]
            input_ids = torch.tensor([full_ids], device=device)
            target_pos = 1 + prefix_len + i
            logits = model(input_ids).logits[0]
            log_probs = torch.log_softmax(logits[target_pos], dim=-1)
            log_prob_sum += log_probs[word_ids_full[i]].item()
    return log_prob_sum


def score_candidate_in_stimulus(text, candidate, placeholder="[modifier]"):
    filled_sentence = text.replace(placeholder, candidate)
    log_prob = score_word_in_sentence(filled_sentence, candidate)
    return filled_sentence, log_prob


# PLACEHOLDER — swap in your real candidate list
CANDIDATE_MODIFIERS = ["あまり", "いまいち", "かなり", "すごく", "そこまで", "それほど", "そんなに", "たいして", "だいぶ", "ちっとも", "ちょっと", "とても", "なかなか", "（なし）", "ひどく", "まあまあ", "マジで", "めっちゃ", "やや", "結構", "若干", "少し", "少しも", "全然", "相当", "超", "非常に", "微妙に", "普通に", "本当に", "全く"]
CANDIDATE_MODIFIERS = ["very", "really", "that", "quite", "(none)", "too", "slightly", "somewhat", "pretty", "a little bit", "at all", "kind of", "completely", "kinda", "a bit", "semi", "a tad", "incredibly", "sorta", "totally", "a little", "amazingly", "extremely", "moderately","mildly",  "clearly", "damn", "majorly",  "absolutely", "exceptionally","so"]



def run_pipeline(stimuli_path, candidates, output_path="EN_modifier_probs.csv"):
    stimuli = load_stimuli(stimuli_path)
    records = []

    for stim_idx, stim in enumerate(stimuli):
        text = stim["text"]
        stim_results = []
        for candidate in candidates:
            try:
                filled_sentence, log_prob = score_candidate_in_stimulus(text, candidate)
            except ValueError as e:
                print(f"[stimulus {stim_idx}] skipped {candidate!r}: {e}")
                continue
            stim_results.append({
                "stimulus_index": stim_idx, "predicate": stim["predicate"],
                "attitude": stim["attitude"], "relationship": stim["relationship"],
                "modifier": candidate, "filled_sentence": filled_sentence, "log_prob": log_prob,
            })
        if not stim_results:
            continue

        # relative probability across just the candidates scored for THIS sentence
        log_probs_tensor = torch.tensor([r["log_prob"] for r in stim_results])
        relative_probs = torch.softmax(log_probs_tensor, dim=0)
        for r, rel_prob in zip(stim_results, relative_probs):
            r["relative_probability"] = rel_prob.item()
        records.extend(stim_results)

        if stim_idx % 10 == 0:
            print(f"Processed stimulus {stim_idx + 1}/{len(stimuli)}")

    df = pd.DataFrame(records)
    df.to_csv(output_path, index=False)
    print(f"Saved {len(df)} rows to {output_path}")
    return df


if __name__ == "__main__":
    df = run_pipeline("stimuli_en.js", CANDIDATE_MODIFIERS, "EN_modifier_probs.csv")