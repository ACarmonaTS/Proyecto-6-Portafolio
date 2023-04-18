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
          <div class="eyesContainer">
    <div class="eye">
      <div class="pupil"></div>
    </div>
    <div class="eye">
      <div class="pupil"></div>
    </div>
  </div>
      <Navbar />
    </motion.header>
  );
}

let eyes = document.querySelectorAll(".eye");
    
let eyeRect = eyes[0].getBoundingClientRect();

let container = document.querySelector(".eyesContainer");
let containerRect = container.getBoundingClientRect();

window.addEventListener("resize", updatePosition, false);

function updatePosition(e) {
  eyeRect = eyes[0].getBoundingClientRect();
  containerRect = container.getBoundingClientRect();
}

document.body.addEventListener("mousemove", eyesFollow, false);

function eyesFollow(e) {
  requestAnimationFrame(() => {
    let xPos = e.pageX;
    let yPos = e.pageY;

    let xDiff = (eyeRect.x + eyeRect.width / 2) - xPos;
    let yDiff = (eyeRect.y + eyeRect.height / 2) - yPos;

    let angle = Math.atan2(yDiff, xDiff) * 180 / Math.PI;

    container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");

    let mouseXRelativetoContainer = xPos - containerRect.x - containerRect.width / 2;
    let mouseYRelativetoContainer = yPos - containerRect.y - containerRect.height / 2;

    let containerXAngle = 60 * (mouseXRelativetoContainer / window.innerWidth);
    let containerYAngle = -1 * 60 * (mouseYRelativetoContainer / window.innerHeight);

    container.style.setProperty("--xAngle", containerXAngle.toFixed(2) + "deg");
    container.style.setProperty("--yAngle", containerYAngle.toFixed(2) + "deg");
  });
}

export default Header;
