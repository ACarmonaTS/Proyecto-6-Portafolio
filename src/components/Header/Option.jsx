import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Option.css";

function Option({ text, href }) {
  return (
    <motion.div
      className="option"
      initial={{
        background: "linear-gradient(#000000 40%, #FFFFFF)",
      }}
      whileHover={{
        height: 100,
        background: "linear-gradient(#000000 80%, #E40C0C)",
        color: "#E40C0C",
      }}
      whileTap={{
        scale: 1.1,
      }}
    >
      <Link to={href} className="links">
        {text}
      </Link>
    </motion.div>
  );
}

export default Option;
