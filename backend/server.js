const express = require("express");
const app = express();

const corsConfig = require("./config/cors");
const blockMiddleware = require("./middleware/blockMiddleware");

app.use(corsConfig);
app.use(express.json());
app.use(blockMiddleware);

app.use(require("./routes/logRoutes"));
app.use(require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on", PORT));
