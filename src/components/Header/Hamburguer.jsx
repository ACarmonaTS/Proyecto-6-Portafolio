import { motion } from "framer-motion";
import { _menu, _close } from "../../assets/assets.jsx";
import Image from "../Image.jsx";
import { List } from "./List";
import Option from "./Option";

import "./Hamburguer.css";

function Hamburguer() {
  window.onresize = () => {
    if (window.innerWidth >= 1200) {
      document.getElementById("menu").style.display = "block";
      document.getElementById("close").style.display = "none";
      document.getElementById("box").style.display = "none";
    }
  };

  const visible = () => {
    document.getElementById("box").style.display = "flex";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";
  };

  const invisible = () => {
    document.getElementById("box").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
  };

  return (
    <>
      <motion.div
        id="hamburguer"
        className="hamburguer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <div id="menu" className="menu" onClick={visible}>
          <Image src={_menu.src} alt={_menu.alt} />
        </div>
        <div id="close" className="close" onClick={invisible}>
          <Image src={_close.src} alt={_close.alt} />
        </div>
      </motion.div>
      <motion.div id="box" className="box">
        {List.map((section) => (
          <Option key={section} option={section} />
        ))}
      </motion.div>
    </>
  );
}

export default Hamburguer;
