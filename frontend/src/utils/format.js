/**
 * Converts backend disease labels like "Tomato___Bacterial_spot"
 * into readable names like "Tomato Bacterial Spot"
 */
export function formatDiseaseName(label) {
  if (!label) return '';
  return label
    .replace(/___/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/**
 * Takes a confidence float (0-1) and returns a percentage string
 */
export function formatConfidence(value) {
  if (value == null) return '0%';
  return (value * 100).toFixed(1) + '%';
}

/**
 * Returns the top N probabilities from the probabilities object, sorted descending
 */
export function getTopProbabilities(probabilities, n = 5) {
  if (!probabilities) return [];
  return Object.entries(probabilities)
    .map(([name, value]) => ({ name: formatDiseaseName(name), value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, n);
}
