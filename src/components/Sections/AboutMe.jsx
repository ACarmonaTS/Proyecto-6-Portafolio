import React from "react";
import { motion } from "framer-motion";

import "./AboutMe.css";

function AboutMe() {
  return (
    <React.Fragment>
      <motion.section
        id="AboutMe"
        className="AboutMe"
        initial={{ scale: .5}}
        animate={{ scale: 1 }}
        transition={{duration: .5}}
      ></motion.section>
     </React.Fragment>
  );
}

export default AboutMe;
