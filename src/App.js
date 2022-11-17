import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
