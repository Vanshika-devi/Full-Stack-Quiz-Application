import { Link }
from "react-router-dom";

function NotFound() {

  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"20px",
        color:"white"
      }}
    >

      <h1
        style={{
          fontSize:"5rem",
          fontWeight:"900"
        }}
      >
        404
      </h1>

      <p
        style={{
          color:"#94a3b8"
        }}
      >
        Page Not Found
      </p>

      <Link
        to="/"
        className="primary-btn"
      >
        Go Home
      </Link>

    </div>

  );
}

export default NotFound;