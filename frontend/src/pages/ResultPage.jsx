import {
  Link,
  useLocation
} from "react-router-dom";

import {
  useEffect
} from "react";

import useAuth
from "../hooks/useAuth";

import calculateScore
from "../utils/calculateScore";

import {
  PASS_PERCENTAGE
} from "../utils/constants";

function ResultPage() {

  const location =
    useLocation();

  const { user } =
    useAuth();

  const score =
    location.state?.score || 0;

  const total =
    location.state?.total || 0;

  const category =
    location.state?.category
    || "Quiz";

  const percentage =
    calculateScore(
      score,
      total
    );

  // SAVE LEADERBOARD
  useEffect(() => {

    const leaderboard =
      JSON.parse(
        localStorage.getItem(
          "leaderboard"
        )
      ) || [];

    leaderboard.push({

      name:
        user?.name || "Player",

      category,

      score: percentage,

      date:
        new Date()
        .toLocaleDateString()

    });

    localStorage.setItem(
      "leaderboard",
      JSON.stringify(
        leaderboard
      )
    );

  }, [
    percentage,
    category,
    user
  ]);

  const getMessage = () => {

    if (percentage >= 90) {
      return "Outstanding Performance 🚀";
    }

    if (percentage >= 70) {
      return "Great Job 🔥";
    }

    if (
      percentage >=
      PASS_PERCENTAGE
    ) {
      return "Good Effort 👍";
    }

    return "Keep Practicing 💪";

  };

  return (

    <div className="min-h-screen flex justify-center items-center px-4 py-10">

      <div
        className="
        glass-card
        text-center
        max-w-2xl
        w-full
        "
      >

        {/* TITLE */}
        <p className="text-blue-400 font-semibold mb-3">

          {category}
          {" "}
          Quiz Completed

        </p>

        <h1 className="text-5xl font-black mb-6">
          Your Result
        </h1>

        {/* SCORE */}
        <div
          className="
          w-52
          h-52

          rounded-full

          bg-gradient-to-br
          from-blue-500
          to-purple-600

          flex
          flex-col
          justify-center
          items-center

          mx-auto
          mb-10

          shadow-2xl
          shadow-blue-500/30
          "
        >

          <h2 className="text-6xl font-black">
            {percentage}%
          </h2>

          <p className="text-white/80 mt-2">
            Score
          </p>

        </div>

        {/* MESSAGE */}
        <div className="mb-8">

          <h3 className="text-3xl font-bold mb-4">

            {getMessage()}

          </h3>

          <p
            className="
            text-slate-400
            text-lg
            leading-relaxed
            "
          >

            You answered
            {" "}

            <span className="text-white font-bold">
              {score}
            </span>

            {" "}
            out of
            {" "}

            <span className="text-white font-bold">
              {total}
            </span>

            {" "}
            questions correctly.

          </p>

        </div>

        {/* BUTTONS */}
        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >

          <Link
            to="/dashboard"
            className="primary-btn"
          >
            Dashboard
          </Link>

          <Link
            to={`/quiz/${category}`}
            className="secondary-btn"
          >
            Retry Quiz
          </Link>

        </div>

      </div>

    </div>

  );
}

export default ResultPage;