import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Image from "../Image";
import logo from "../../assets/assets";

import "./Header.css";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="logo"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <Image src={logo.src} alt={logo.alt} />
      </motion.div>
      <Navbar />
    </motion.header>
  );
}

export default Header;
