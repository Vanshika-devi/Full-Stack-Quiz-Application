import Score
from "../models/Score.js";

/* SAVE SCORE */
export const saveScore =
async (req,res)=>{

  try{

    const {
      category,
      score
    } = req.body;

    const newScore =
      await Score.create({

        user:req.user._id,

        category,

        score

      });

    res.status(201).json(
      newScore
    );

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};

/* GET LEADERBOARD */
export const getLeaderboard =
async (req,res)=>{

  try{

    const leaderboard =
      await Score.find()

      .populate(
        "user",
        "name email"
      )

      .sort({
        score:-1
      })

      .limit(10);

    res.json(
      leaderboard
    );

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};

/* GET USER SCORES */
export const getUserScores =
async (req,res)=>{

  try{

    const scores =
      await Score.find({

        user:req.user._id

      }).sort({
        createdAt:-1
      });

    res.json(scores);

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};