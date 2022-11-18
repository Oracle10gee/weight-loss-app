import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";
import History from "./components/history";
import AddWeight from "./components/weight";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/add-weight" element={<AddWeight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
