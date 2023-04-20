import React from "react";
import { motion } from "framer-motion";
import Carousel from "../Carousel";

import "./AboutMe.css";


function AboutMe() {
  return (
    <React.Fragment>
      <motion.section
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="AboutMe">
          <div className="section">
            <Carousel />
          </div>
          <span className="waves waveOne"></span>
          <span className="waves waveTwo"></span>
          <span className="background"></span>
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default AboutMe;
