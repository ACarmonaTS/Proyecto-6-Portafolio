import "./Card.css";

function Card({title, text}) {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{text}</p>
    </div>
  );
}

export default Card;
