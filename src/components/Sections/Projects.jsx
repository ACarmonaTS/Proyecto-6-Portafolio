import React, { useState } from "react";
import { motion } from "framer-motion";
// import * as properties from "../properties";
// import ReactSimplyCarousel from "react-simply-carousel";
// import Image from "../Image";
import { _bms } from "../../assets/assets";
// import video from "../../assets/MONITOREO.mp4"

import "./Projects.css";
// import ReactPlayer from "react-player";

function Projects() {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <React.Fragment>
      <motion.section
        id="Projects"
        className="Projects"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="Projects">
          <div className="projectsBox">
            <motion.div className="bms">
              <h2>
                "BMS para las instalaciones del <br />
                Sistema de Trasporte Colectivo (METRO) de la CDMX"
              </h2>
            </motion.div>
            <div className="boxP">
              {/* <div className="v">
                <div className="imaV">
                  <ReactPlayer url={video} controls/>
                </div>
              </div> */}
              <motion.div className="desc">
                <p className="t">
                  Ecosistema escalable y modularizado, dividido en tres grupos:
                </p>
                <ul className="p">
                  <li>Sistema de adquisición y control</li>
                  <li>Estructura de red y servidores</li>
                  <li>Central de monitoreo y mejora continua</li>
                </ul>
                <p className="t">Algunas características del sistema son:</p>
                <ul className="p">
                  <li>
                    Software de control remoto, generación de reportes y
                    monitoreo
                  </li>
                  <li>
                    Adquisición y almacenamiento de datos por línea y por equipo
                  </li>
                  <li>
                    Aplicación móvil para generación de reportes y registro de
                    actividades
                  </li>
                  <li>Chat entre los colaboradores de la red</li>
                  <li>
                    Diferentes niveles de usuario de acuerdo con el rango del
                    colaborador
                  </li>
                  <li>
                    Y ahora contará con una plataforma web para el muestreo
                    general del servicio.
                  </li>
                </ul>
                <a className="dow" href="./Monitoreo.pdf" target="_blank">
                  BMS PDF
                </a>
              </motion.div>
            </div>

            {/* <div className="carousel">
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                autoplay={true}
                delay={4500}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  style: properties.right,
                  children: <span style={{ cursor: "pointer" }}>{`>n`}</span>,
                }}
                backwardBtnProps={{
                  style: properties.left,
                  children: <span style={{ cursor: "pointer" }}>{`<`}</span>,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 1,
                    itemsToScroll: 1,
                  },
                ]}
                speed={500}
                easing="linear"
              >

              </ReactSimplyCarousel>
            </div> */}
          </div>
          <span className="wavesProj waveOneProj"></span>
          <span className="wavesProj waveTwoProj"></span>
          <span className="backgroundProj"></span>
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default Projects;
