import { Link } from "react-router-dom";

import useAuth
from "../hooks/useAuth";

function Dashboard() {

  const { user } = useAuth();

  const quizzes = [

    {
      title:"React",
      difficulty:"Intermediate",
      questions:20,

      icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

      className:"react-card"
    },

    {
      title:"JavaScript",
      difficulty:"Beginner",
      questions:15,

      icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

      className:"js-card"
    },

    {
      title:"MERN",
      difficulty:"Advanced",
      questions:25,

      icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

      className:"mern-card"
    }

  ];

  return (

    <div className="dashboard-page">

      {/* HEADER */}
      <div className="dashboard-header">

        <div>

          <p className="dashboard-label">
            Dashboard
          </p>

          <h1 className="dashboard-title">

            Welcome back,
            <span>
              {" "}
              {user?.name || "Developer"}
            </span>

          </h1>

          <p className="dashboard-subtitle">

            Continue improving your skills
            with interactive quizzes and
            real-time tracking.

          </p>

        </div>

      </div>

      {/* USER CARD */}
      <div className="user-card">

        <p>
          Logged in as
        </p>

        <h2>
          {user?.email}
        </h2>

      </div>

      {/* QUIZ GRID */}
      <div className="quiz-grid">

        {quizzes.map((quiz,index)=>(

          <div
            key={index}
            className={`quiz-card ${quiz.className}`}
          >

            {/* ICON */}
            <div className="quiz-icon">

              <img
                src={quiz.icon}
                alt={quiz.title}
                className="quiz-image"
              />

            </div>

            {/* TITLE */}
            <h2>
              {quiz.title}
            </h2>

            {/* DIFFICULTY */}
            <span className="difficulty-badge">
              {quiz.difficulty}
            </span>

            {/* QUESTIONS */}
            <p className="question-count">

              {quiz.questions}
              {" "}
              Questions

            </p>

            {/* BUTTON */}
            <Link
              to={`/quiz/${quiz.title}`}
              className="start-btn"
            >
              Start Quiz
            </Link>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Dashboard;