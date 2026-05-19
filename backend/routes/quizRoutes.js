import express
from "express";

import protect
from "../middleware/authMiddleware.js";

import {

  saveScore,

  getLeaderboard,

  getUserScores

}
from "../controllers/quizController.js";

const router =
  express.Router();

/* SAVE SCORE */
router.post(
  "/score",
  protect,
  saveScore
);

/* GET LEADERBOARD */
router.get(
  "/leaderboard",
  getLeaderboard
);

/* GET USER SCORES */
router.get(
  "/my-scores",
  protect,
  getUserScores
);

export default router;