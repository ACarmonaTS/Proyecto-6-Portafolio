import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer.jsx";

import "./Header.css";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="logo">
        <Logo />
      </div>
      <Hamburguer />
      <Navbar />
    </motion.header>
  );
}

export default Header;
