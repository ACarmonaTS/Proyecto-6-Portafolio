import { motion } from "framer-motion";

import "./Option.css";

const Option = ({ option }) => (
  <motion.a
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
    {option}
  </motion.a>
);

export default Option;
