const attackPatterns = [
  { type: "SQL Injection", regex: /('|--|union|select|or\s+1=1)/i },
  { type: "XSS", regex: /(<script|alert\(|onerror=)/i },
  { type: "Path Traversal", regex: /(\.\.\/|%2e%2e)/i }
];

module.exports = function detectAttack(req) {
  const data = JSON.stringify(req.body) + req.url;
  for (let p of attackPatterns) {
    if (p.regex.test(data)) return p.type;
  }
  return null;
};
