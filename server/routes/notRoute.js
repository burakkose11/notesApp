const express = require("express");
const router = express.Router();

const notModel = require("../models/notModel");
const {
  newNotes,
  notesList,
  noteById,
  noteDelete,
  noteUpdate,
} = require("../controllers/notController");

router.get("/", notesList);

router.get("/:id", noteById);

router.post("/", newNotes);

router.delete("/:id", noteDelete);

router.patch("/:id", noteUpdate);

module.exports = router;
