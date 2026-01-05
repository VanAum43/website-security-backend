const express = require("express");
const logs = require("../data/logs");

const router = express.Router();

router.get("/admin/logs", (req, res) => {
  res.json(logs);
});

module.exports = router;
