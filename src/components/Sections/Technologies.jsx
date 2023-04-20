import React from "react";
import { motion } from "framer-motion";

import "./Technologies.css";

function Technologies() {
  return (
    <React.Fragment>
      <motion.section
        id="Technologies"
        className="Technologies"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="Technologies">
          <span className="wavesTech waveOneTech"></span>
          <span className="wavesTech waveTwoTech"></span>
          <span className="backgroundTech"></span>
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default Technologies;
