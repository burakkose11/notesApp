const express = require("express");
const cors = require("cors");
require("dotenv").config();
const notRoute = require("./routes/notRoute");

const db = require("./db");

const app = express();
app.use(cors());

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} çalışıyor...`);
});

app.use("/api/notlar", notRoute);
