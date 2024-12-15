const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Bütün notlar" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ msg: `${id}. not geldi.` });
});

router.post("/", (req, res) => {
  res.json({ msg: "not eklendi" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: `${req.params.id}. not silindi.` });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: `${req.params.id}. not güncellendi` });
});

module.exports = router;
