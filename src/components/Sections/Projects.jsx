import React from "react";
import { motion } from "framer-motion";

import "./Projects.css";

function Projects() {
  return (
    <React.Fragment>
      <motion.section
        id="Projects"
        className="Projects"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >

      </motion.section>
    </React.Fragment>
  );
}

export default Projects;