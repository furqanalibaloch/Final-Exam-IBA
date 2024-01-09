const express = require("express");
const {
  createPoetry,
  getAllPoetry,
 
} = require("../Controller/poetryController");

const router = express.Router();

router.post("/createPoetry", createPoetry);
router.get("/getAllPoetry", getAllPoetry);

module.exports = router;
