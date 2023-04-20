import Header from "./components/Header/Header.jsx";
import Whatsapp from "./components/Whatsapp.jsx";
import AboutMe from "./components/Sections/AboutMe.jsx";
import Technologies from "./components/Sections/Technologies.jsx";
import Projects from "./components/Sections/Projects.jsx";
import ContactMe from "./components/Sections/ContactMe.jsx";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/Technologies" element={<Technologies />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </main>
        <Whatsapp />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
