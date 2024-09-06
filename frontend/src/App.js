import React from "react";
import SearchPage from "./pages/SearchPage";
import SavedPapersPage from "./pages/SavedPapersPage";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/saved" element={<SavedPapersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
