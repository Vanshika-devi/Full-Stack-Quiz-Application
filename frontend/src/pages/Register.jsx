import { useState }
from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import useAuth
from "../hooks/useAuth";

function Register() {

  const navigate =
    useNavigate();

  const { register } =
    useAuth();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit =
  async (e)=>{

    e.preventDefault();

    const result =
      await register({

        name,
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
          Create Account ✨
        </h1>

        <p className="form-subtitle">
          Start your learning journey
          and challenge yourself with
          interactive quizzes.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e)=>
                setName(
                  e.target.value
                )
              }
              className="form-input"
            />

          </div>

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
            Register
          </button>

        </form>

        <div className="auth-footer">

          Already have an account?
          {" "}

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Register;