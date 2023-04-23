import Header from "./components/Header/Header.jsx";
import Whatsapp from "./components/Whatsapp.jsx";
import AboutMe from "./components/Sections/AboutMe.jsx";
import Projects from "./components/Sections/Projects.jsx";
import SocialMedia from "./components/SocialMedia.jsx"
import { _link, _git} from "./assets/assets.jsx"
import Animation from "./components/Animation.jsx"

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Animation />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </main>
        <Whatsapp />
        <div className="mediaBox">
          <SocialMedia logo={_git} href={_git.href}/>
          <SocialMedia logo={_link} href={_link.href}/>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
