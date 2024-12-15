const notModel = require("../models/notModel");

const newNotes = async (req, res) => {
  const { baslik, icerik } = req.body;

  try {
    const newNote = await notModel.create({ baslik, icerik });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const notesList = async (req, res) => {
  try {
    const notes = await notModel.getAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const noteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await notModel.getById(id);

    if (!note) {
      res.status(404).json({ error: `${id}. not bulunamadı.` });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const noteDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteNote = await notModel.delete(id);

    if (!deleteNote) {
      res.status(404).json({ error: `${id}. not bulunamadı` });
    }

    res.status(200).json({ message: `${id}. not silindi.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const noteUpdate = async (req, res) => {
  const { id } = req.params;
  const { baslik, icerik } = req.body;

  try {
    const update = await notModel.update(id, { baslik, icerik });

    if (!update) {
      res.status(404).json({ error: "not güncellenemedi." });
    }

    res.status(200).json({ message: "not güncellendi" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { newNotes, notesList, noteById, noteDelete, noteUpdate };
