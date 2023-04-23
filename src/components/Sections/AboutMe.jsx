import React from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import { _tech } from "../../assets/assets";
import Card from "../Included/Card";
import info from "../Included/info";

import "./AboutMe.css";

function AboutMe() {
  return (
    <React.Fragment>
      <motion.section
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="aboutMe">
          <div className="aboutContent">
            <div className="presentation">
              <div className="name">
                Alejandro Carmona
                <div className="job">Desarrollador de software</div>
              </div>
              <div className="tech">
                <Image src={_tech.src} alt={_tech.alt} />
              </div>
            </div>
            <div className="description">
              {info.map((element, index) => (
                <Card
                  key={index}
                  title={element.title}
                  text={element.description}
                />
              ))}
            </div>
            <div className="descriptionTwo">
              {info.map((element, index) => (
                <Card
                  key={index}
                  title={element.title}
                  text={element.description}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default AboutMe;
