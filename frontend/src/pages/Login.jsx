import { useState }
from "react";

import { useNavigate, Link }
from "react-router-dom";

import useAuth
from "../hooks/useAuth";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit =
  async (e)=>{

    e.preventDefault();

    const result =
      await login({

        email,
        password

      });

    if(result.success){

      navigate("/dashboard");

    }else{

      alert(result.message);

    }

  };

  return (

    <div className="auth-page">

      <div className="form-container">

        <h1 className="form-title">
          Welcome Back 👋
        </h1>

        <p className="form-subtitle">
          Login to continue your
          learning journey and
          track your quiz progress.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e)=>
                setEmail(
                  e.target.value
                )
              }
              className="form-input"
            />

          </div>

          <div className="form-group">

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e)=>
                setPassword(
                  e.target.value
                )
              }
              className="form-input"
            />

          </div>

          <button
            className="primary-btn"
          >
            Login
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?
          {" "}

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Login;