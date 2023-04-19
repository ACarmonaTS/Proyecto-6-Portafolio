import { motion } from "framer-motion";
import Image from "./Image";
import { _whatsapp } from "../assets/assets.jsx";

import "./Whatsapp.css";

function Whatsapp() {
  return (
    <>
      <motion.a
        className="btn"
        initial={{ y: -1000 }}
        animate={{ y: -10 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.5 }}
        href="https://wa.me/+525624314130?text=Hi%20Carmona%20..."
        target="_blank"
      >
        <Image src={_whatsapp.src} alt={_whatsapp.alt} />
      </motion.a>
    </>
  );
}

export default Whatsapp;
