import { Link } from "react-router-dom";

import useAuth
from "../hooks/useAuth";


function Home() {

  const { user } = useAuth();

  return (

    <div className="hero-section">

      <div className="hero-left">

        <h1 className="hero-title">
          Learn Faster
          <br />
          With
          <span className="highlight">
            {" "}Smart
          </span>
          <br />
          Quizzes
        </h1>

        <p className="hero-description">
          Practice React, JavaScript,
          MERN Stack and more with
          interactive quizzes and
          real-time performance
          tracking.
        </p>

        <div className="hero-buttons">

          {user ? (

            <Link
              to="/dashboard"
              className="primary-btn"
            >
              Go To Dashboard
            </Link>

          ) : (

            <>
              <Link
                to="/register"
                className="primary-btn"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="secondary-btn"
              >
                Login
              </Link>
            </>

          )}

        </div>

      </div>

      <div className="hero-right">

        <div className="stats-card">

          <h2>
            Quiz Statistics
          </h2>

          <div className="stat-item">

            <div className="stat-header">
              <span>React Quiz</span>
              <span>95%</span>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill react-fill"
              />

            </div>

          </div>

          <div className="stat-item">

            <div className="stat-header">
              <span>JavaScript Quiz</span>
              <span>88%</span>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill js-fill"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;