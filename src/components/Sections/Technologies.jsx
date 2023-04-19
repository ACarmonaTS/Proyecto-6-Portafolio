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

      </motion.section>
    </React.Fragment>
  );
}

export default Technologies;
