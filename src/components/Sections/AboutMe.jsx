import React from "react";
import { motion } from "framer-motion";
import Carousel from "../Carousel";
import Image from "../Image";
import { _tech } from "../../assets/assets";

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
            <div className="carousel">
              <div className="data">
                <h1 className="name">Alejandro Carmona</h1>
                <h3 className="prof">Desarrollador de software | IoT</h3>
                <div className="techLimit">
                  <Image src={_tech.src} alt={_tech.alt}/>
                </div>
              </div>
              <Carousel />
            </div>
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
