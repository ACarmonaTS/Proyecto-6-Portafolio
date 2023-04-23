import { motion } from "framer-motion";
import Image from "./Image";

import "./SocialMedia.css";

function SocialMedia({logo, href}) {
  return (
    <>
      <motion.a
        className="btnG"
        initial={{ y: -1000 }}
        animate={{ y: -10 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.5 }}
        href={href}
        target="_blank"
      >
        <Image src={logo.src} alt={logo.alt} />
      </motion.a>
    </>
  );
}

export default SocialMedia;
