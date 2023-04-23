import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../assets/assets"
import CardProy from "../Included/CardProy";

import "./Projects.css";

function Projects() {
  return (
    <React.Fragment>
      <motion.section
        id="Projects"
        className="projects"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="proys">
          {projects.map((element) => (
            <CardProy src={element.src} alt={element.alt}
             title={element.title} 
             description={element.description}
             link={element.link}
            />
          ))}
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default Projects;
