module.exports = function maintainCaseSlug(text) {
  return text
    .trim()
    .replace(/\s+/g, '-')         // spazi → trattini
    .replace(/[^\w\-]/g, '');     // rimuovi caratteri non validi
};
