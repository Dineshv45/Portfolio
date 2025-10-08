// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Header />

      <Routes>
  <Route
    path="/"
    element={
      <>
        <HeroSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    }
  />
</Routes>

    </>
  );
}

export default App;
