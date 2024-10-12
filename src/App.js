// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Achievements from "./Components/Achievements";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./index.css";
import Navbar from "./Ui/Navbar";
import ContactMe from "./Ui/ContactMe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
