const express = require("express");
const cors = require("cors");
require("dotenv").config();
const notRoute = require("./routes/notRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} çalışıyor...`);
});

app.use("/api/notlar", notRoute);
