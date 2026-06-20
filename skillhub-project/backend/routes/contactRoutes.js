const express = require("express");
const router = express.Router();
const { saveMessage, getMessages } = require("../controllers/contactController");

// Save a new contact message
router.post("/", saveMessage);

// Get all messages
router.get("/", getMessages);

module.exports = router;
