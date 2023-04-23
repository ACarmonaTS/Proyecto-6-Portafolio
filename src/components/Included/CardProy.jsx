import Image from "../Image";

import "./CardProy.css";

function CardProy({title, src, alt, description, link}) {
  return (
    <div className="cardProy">
      <div className="nameProy">{title}</div>
      <div className="imgProy">
        <Image src={src} alt={alt}/>
      </div>
      <div className="descProy">{description}</div>
      <a className="linkProy" href={link} target="_blank">REVISAR PROYECTO</a>
    </div>
  );
}

export default CardProy;
