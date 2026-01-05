const { isBlocked } = require("../security/ipBlocker");

module.exports = function (req, res, next) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (isBlocked(ip)) {
    return res.status(403).json({ message: "IP blocked 🚫" });
  }
  next();
};
