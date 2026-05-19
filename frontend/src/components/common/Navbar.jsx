import { Link, useNavigate } from "react-router-dom";

import useAuth
from "../../hooks/useAuth";

function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <nav className="navbar">

      <div className="logo-section">

        <div className="logo-icon">
          Q
        </div>

        <div>

          <h2 className="logo-text">
            QuizMaster
          </h2>

          <p className="logo-subtext">
            LEARNING PLATFORM
          </p>

        </div>

      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {user ? (
          <>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/leaderboard">
              Leaderboard
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>
        ) : (
          <>

            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>

          </>
        )}

      </div>

    </nav>

  );
}

export default Navbar;