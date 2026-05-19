import express
from "express";

import cors
from "cors";

import dotenv
from "dotenv";

import connectDB
from "./config/db.js";

import authRoutes
from "./routes/authRoutes.js";

import quizRoutes
from "./routes/quizRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

/* AUTH ROUTES */
app.use(
  "/api/auth",
  authRoutes
);

/* QUIZ ROUTES */
app.use(
  "/api/quiz",
  quizRoutes
);

/* TEST ROUTE */
app.get("/", (req,res)=>{

  res.send(
    "QuizMaster API Running"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, ()=>{

  console.log(
    `Server running on port ${PORT}`
  );

});