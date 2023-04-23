import favicon from "./favicon.ico"
import menu from "./menu.png"
import close from "./close.png"
import whats from "./whatsapp.png"
import tech from "./tech.png"
import linkedin from "./linkedin.png"
import github from "./github.png"
import bms from "./bms.png"
import proy1 from "./proy1.png"
import proy2 from "./proy2.png"
import proy3 from "./proy3.png"
import proy4 from "./proy4.png"

export const _menu = {
  src: menu,
  alt: "MENÚ"
}

export const _close = {
  src: close,
  alt: "CERRAR"
}

export const _whatsapp = {
  src: whats,
  alt: "WHATSAPP"
}

export const _tech = {
  src: tech,
  alt: "TECH"
}

export const _link = {
  src: linkedin,
  alt: "LINKEDIN",
  href: "https://www.linkedin.com/in/alejandrotcarmonas/"
}

export const _git = {
  src: github,
  alt: "GITHUB",
  href: "https://github.com/ACarmonaTS"
}

export const projects = [
  {
    title: "BMS para el Sistema de Transporte Colectivo METRO de la CDMX",
    src: bms,
    alt: "BMS",
    link: "",
    description: "Desarrollado con la plataforma de National Instruments LabVIEW y G WEB DEVELOP",
  },
  {
    title: "DASHBOARD APP",
    src: proy3,
    alt: "PROYECTO 3",
    link: "https://github.com/ACarmonaTS/Proyecto-3-Dashboard-App-Eq2",
    description: "En este tercer proyecto se dejo trabajar con una libreria de graficas llamada Chart.js en combinacion de la posibilidad de crear una conexión a través de una API a una base de datos controlada. En el proyecto elegimos una API para poder obtener los datos de las criptomonedas y poder graficar en tiempo real su evolucion.",
  },
  {
    title: "RESTAURANT APP",
    src: proy4,
    alt: "PROYECTO 4",
    link: "https://github.com/ACarmonaTS/Proyecto-4-Restaurant-App",
    description: "Uso de: React, React Router, Hooks, Props, Firebase",
  },
  {
    title: "APLICACIÓN CRUD",
    src: proy2,
    alt: "PROYECTO 2",
    link: "https://github.com/ACarmonaTS/Proyecto2_Aplicacion_CRUD",
    description: "Simulación de sistema de inventario CRUD (Create, Read, Update, Delete) (Crear, Leer, Actualizar y Eliminar) y sección de búsqueda. Todos los datos se almacenarán en el localStorage del navegador, por lo que no se perderán si se cierra.",
  },
  {
    title: "LANDING DE VENTA",
    src: proy1,
    alt: "PROYECTO 1",
    link: "https://github.com/ACarmonaTS/Proyecto1_Landing_de_venta",
    description: "Página sencilla elaborada con HTML, CSS y JavaScript",
  },
]