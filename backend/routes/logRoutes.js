const express = require("express");
const detectAttack = require("../security/attackDetector");
const { blockIP } = require("../security/ipBlocker");
const logs = require("../data/logs");

const router = express.Router();

router.post("/log", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];
  const time = new Date().toISOString();

  const attack = detectAttack(req);

  logs.push({
    ip,
    userAgent,
    action: req.body.action || "-",
    page: req.body.page || "-",
    attack: attack || "None",
    time
  });

  if (attack) blockIP(ip);

  res.json({ success: true });
});

module.exports = router;
