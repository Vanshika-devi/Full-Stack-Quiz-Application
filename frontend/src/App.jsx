import "./styles/global.css";

import Navbar from "./components/common/Navbar";

import AppRoutes from "./routes/AppRoutes";

function App() {

  return (

    <div className="app-container">

      <Navbar />

      <AppRoutes />

    </div>

  );
}

export default App;