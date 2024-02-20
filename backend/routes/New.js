const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const Assignment = require("../models/Announcement");

router.get("/", async (req, res) => {
  const firstQuiz = await Quiz.findOne().sort("createdAt").limit(1);

  const firstAssignment = await Assignment.findOne().sort("createdAt").limit(1);

  res.status(200).json({
    firstQuiz,
    firstAssignment,
  });
});

module.exports = router;