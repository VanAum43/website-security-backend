const blockedIPs = new Set();

module.exports = {
  blockIP: ip => blockedIPs.add(ip),
  isBlocked: ip => blockedIPs.has(ip)
};
