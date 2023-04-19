import React from "react";
import { motion } from "framer-motion";

import "./ContactMe.css";

function ContactMe() {
  return (
    <React.Fragment>
      <motion.section
        id="ContactMe"
        className="ContactMe"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >

      </motion.section>
    </React.Fragment>
  );
}

export default ContactMe;