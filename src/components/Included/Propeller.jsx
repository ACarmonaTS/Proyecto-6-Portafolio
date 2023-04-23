import React from "react";
import { motion } from "framer-motion";

import "./Propeller.css";

function Propeller() {
  return (
    <div className="propellerTurbine">
      <div className="base"></div>
      <motion.div
        className="propeller"
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <div className="center"></div>
        <div className="propellerOne"></div>
        <div className="propellerTwo"></div>
        <div className="propellerThree"></div>
      </motion.div>
    </div>
  );
}

export default Propeller;
