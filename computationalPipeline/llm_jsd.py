"""
JSD across attitudes / relationships from LLM modifier probabilities.

INPUT: a CSV with one row per (stimulus, modifier):
    stimulus_index, predicate, attitude, relationship, modifier,
    filled_sentence, log_prob, relative_probability
`relative_probability` is already normalised within each stimulus, so each
(predicate, attitude, relationship) cell is an EXACT distribution over modifiers.

WHAT IS DIFFERENT FROM PARTICIPANT DATA
  No sampling. The cell distributions are exact, so there is no finite-sample
  bias in the entropies and nothing to bootstrap over participants. That removes
  NSB, bias correction, and the sampling-noise "chance floor" all at once.

  What remains is a real question: the observed JSD across attitudes is positive,
  but so would be the JSD across ANY grouping of 168 cells that differ for many
  reasons (predicate, relationship, scenario wording). The permutation test asks
  whether the attitude-aligned grouping is special:

      permute the attitude label among the 7 cells inside each
      (predicate, relationship) block, re-aggregate, recompute JSD

  Holding predicate and relationship fixed is what isolates attitude. Permuting
  across blocks would let predicate and relationship differences leak in.

  The null mean here is NOT an estimator bias floor -- it is the divergence you
  get from an arbitrary relabelling. Reporting observed minus null keeps the
  interpretation clean either way.

TWO SOURCES OF UNCERTAINTY, NEITHER OF WHICH IS SAMPLING
  1. Predicate variability. If the 6 predicates are meant to stand in for
     adjectives generally, resampling them gives a CI for that generalisation.
     With only 6 it is coarse; the per-predicate table is more informative.
  2. Model/prompt variability, which this file cannot see at all. Results are
     conditional on one model and one scenario set.

    from llm_jsd import analyze
    analyze("stimuli.csv")
"""

import numpy as np
import pandas as pd
from scipy.stats import entropy

LN2 = np.log(2.0)


def _H(p):
    p = np.asarray(p, float)
    p = p[p > 0]
    return float(-(p * np.log(p)).sum() / LN2)


def jsd_multiple(dists, weights=None):
    """Generalized JSD in bits. dists: (K, M), rows sum to 1."""
    d = np.asarray(dists, float)
    w = np.full(len(d), 1.0 / len(d)) if weights is None else np.asarray(weights, float) / np.sum(weights)
    return _H(np.average(d, axis=0, weights=w)) - float(np.average([_H(x) for x in d], weights=w))


def load(path, prob_col="relative_probability"):
    """-> P[predicate, attitude, relationship, modifier], plus the level names."""
    df = pd.read_csv(path)
    need = ["predicate", "attitude", "relationship", "modifier", prob_col]
    missing = [c for c in need if c not in df.columns]
    assert not missing, f"missing columns: {missing}"

    preds = sorted(df["predicate"].unique())
    atts = sorted(df["attitude"].unique())
    rels = sorted(df["relationship"].unique())
    mods = sorted(df["modifier"].unique())
    shape = (len(preds), len(atts), len(rels), len(mods))

    P = np.full(shape, np.nan)
    ix = [{v: i for i, v in enumerate(vs)} for vs in (preds, atts, rels, mods)]
    P[df["predicate"].map(ix[0]), df["attitude"].map(ix[1]),
      df["relationship"].map(ix[2]), df["modifier"].map(ix[3])] = df[prob_col].to_numpy()

    filled = ~np.isnan(P).any(axis=3)
    print(f"{len(df)} rows -> {len(preds)} predicates x {len(atts)} attitudes x "
          f"{len(rels)} relationships x {len(mods)} modifiers")
    print(f"  complete cells: {filled.sum()}/{filled.size} ({filled.mean():.1%})")
    assert filled.all(), ("grid is incomplete; permutation within (predicate, "
                          "relationship) needs every cell present")

    s = P.sum(axis=3)
    print(f"  cell probability sums: min {s.min():.4f}, max {s.max():.4f}")
    if abs(s - 1).max() > 1e-3:
        print(f"  renormalising (max deviation {abs(s-1).max():.4f})")
        P = P / s[..., None]
    return P, preds, atts, rels, mods


# ---------------------------------------------------------------------------


def _collapse(P, axis):
    """Average cells down to one distribution per level of `axis`.
    axis: 1 = attitude (average over predicate, relationship)
          2 = relationship (average over predicate, attitude)"""
    other = 2 if axis == 1 else 1
    return P.mean(axis=(0, other))          # -> (levels, modifiers)


def _permute(P, axis, rng):
    """Shuffle `axis` labels independently inside each (predicate, other-axis) block."""
    Q = P.copy()
    K = P.shape[axis]
    if axis == 1:                                     # permute attitudes
        for i in range(P.shape[0]):
            for r in range(P.shape[2]):
                Q[i, :, r] = P[i, rng.permutation(K), r]
    else:                                             # permute relationships
        for i in range(P.shape[0]):
            for a in range(P.shape[1]):
                Q[i, a, :] = P[i, a, rng.permutation(K)]
    return Q


def test_axis(P, axis, names, label, other_label, n_perm=5000, seed=0, alpha=0.05):
    K = P.shape[axis]
    obs = jsd_multiple(_collapse(P, axis))
    rng = np.random.default_rng(seed)
    null = np.array([jsd_multiple(_collapse(_permute(P, axis, rng), axis))
                     for _ in range(n_perm)])
    floor = float(null.mean())
    n_ge = int((null >= obs).sum())
    p = (n_ge + 1) / (n_perm + 1)
    sd = float(null.std(ddof=1))

    print(f"\n[{label}]  {K} levels, permuting within (predicate x {other_label})")
    print(f"  observed JSD       {obs:.4f} bits   (ceiling log2 {K} = {np.log2(K):.3f})")
    print(f"  relabelling floor  {floor:.4f} bits")
    print(f"  effect             {obs - floor:.4f} bits")
    print(f"  p                  {'< ' + format(1/(n_perm+1), '.2g') if n_ge == 0 else '= ' + format(p, '.4f')}"
          f"   ({n_ge}/{n_perm} permutations reached it)")
    print(f"  null sd {sd:.4f};  observed is {(obs-floor)/sd:.1f} SDs out")

    # per-level entropy, to show WHICH levels are peaked vs spread
    per = _collapse(P, axis)
    print(f"  per-level entropy (bits) and top modifier:")
    order = np.argsort([_H(row) for row in per])
    for j in order:
        top = int(np.argmax(per[j]))
        print(f"    {str(names[j])[:20]:<22}H={_H(per[j]):.3f}   top={MODS[top]} ({per[j][top]:.2f})")
    return dict(obs=obs, floor=floor, effect=obs - floor, p=p, null=null,
                censored=(n_ge == 0), per_level=per)


def per_predicate(P, axis, preds, label):
    """JSD computed within each predicate separately -- is the effect consistent?"""
    other = 2 if axis == 1 else 1
    print(f"\n  {label} JSD by predicate:")
    vals = []
    for i, pr in enumerate(preds):
        v = jsd_multiple(P[i].mean(axis=other - 1))
        vals.append(v)
        print(f"    {str(pr)[:14]:<16}{v:.4f}")
    vals = np.array(vals)
    print(f"    {'mean':<16}{vals.mean():.4f}   (sd {vals.std(ddof=1):.4f}, "
          f"range {vals.min():.4f}-{vals.max():.4f})")
    return vals


def boot_predicates(P, axis, n_boot=2000, seed=1, alpha=0.05):
    """CI that generalises over PREDICATES (the only resampling unit available).
    With few predicates this is coarse -- read it alongside the per-predicate table."""
    rng = np.random.default_rng(seed)
    n = P.shape[0]
    obs = jsd_multiple(_collapse(P, axis))
    raw = np.array([jsd_multiple(_collapse(P[rng.integers(0, n, n)], axis))
                    for _ in range(n_boot)])
    mid = float(np.median(raw))
    lo, hi = np.percentile(raw, [100*alpha/2, 100*(1-alpha/2)]) - mid + obs
    print(f"  95% CI over predicates: [{lo:.4f}, {hi:.4f}]  "
          f"(n={n} predicates, width transferred from the bootstrap spread)")
    return lo, hi


def analyze(path, n_perm=2000, n_boot=1000, seed=0):
    global MODS
    P, preds, atts, rels, MODS = load(path)
    print("\n" + "=" * 70)
    rA = test_axis(P, 1, atts, "ATTITUDE", "relationship", n_perm, seed)
    per_predicate(P, 1, preds, "attitude")
    boot_predicates(P, 1, n_boot, seed + 1)
    print("\n" + "=" * 70)
    rR = test_axis(P, 2, rels, "RELATIONSHIP", "attitude", n_perm, seed)
    per_predicate(P, 2, preds, "relationship")
    boot_predicates(P, 2, n_boot, seed + 1)
    print("\n" + "=" * 70)
    print(f"  attitude     effect {rA['effect']:.4f} bits")
    print(f"  relationship effect {rR['effect']:.4f} bits")
    print(f"  -> {'attitude' if rA['effect'] > rR['effect'] else 'relationship'} "
          f"moves modifier choice more, by "
          f"{abs(rA['effect']-rR['effect']):.4f} bits")
    print("=" * 70)
    return dict(attitude=rA, relationship=rR, P=P,
                predicates=preds, attitudes=atts, relationships=rels, modifiers=MODS)


if __name__ == "__main__":
    import sys
    analyze(sys.argv[1] if len(sys.argv) > 1 else "/Users/yuka/Documents/Academics/Stanford/Research/crossCulturalPolitenessOfModifiers/computationalPipeline/JP_modifier_probs.csv")
