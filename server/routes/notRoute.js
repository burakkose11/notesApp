const express = require("express");
const router = express.Router();

const notModel = require("../models/notModel");

router.get("/", async (req, res) => {
  try {
    const notlar = await notModel.getAll();
    res.status(200).json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const not = await notModel.getById(id);
    if (!not) {
      return res.status(404).json({ error: "Not bulunamadı !" });
    }
    res.status(200).json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const sil = await notModel.delete(id);

    if (!sil) {
      res.status(404).json({ error: "Silenecek not bulunamadı." });
    }
    return res.status(200).json({ error: `${id}. not silindi` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { baslik, icerik } = req.body;

  try {
    const update = await notModel.update(id, { baslik, icerik });
    if (!update) {
      return res.status(404).json({ error: "Not güncellenemedi. :(" });
    }
    res.status(200).json({ error: "Not güncellendi. :)" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
