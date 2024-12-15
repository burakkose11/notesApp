const express = require("express");
const router = express.Router();

const notModel = require("../models/notModel");

router.get("/", (req, res) => {
  res.json({ msg: "Bütün notlar" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ msg: `${id}. not geldi.` });
});

router.post("/", async (req, res) => {
  const { baslik, icerik } = req.body;

  try {
    const not = await notModel.create({ baslik, icerik });
    res.status(200).json(not);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: `${req.params.id}. not silindi.` });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: `${req.params.id}. not güncellendi` });
});

module.exports = router;
