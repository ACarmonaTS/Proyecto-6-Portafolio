import "./Card.css";

function Card(text) {
  return (
    <div className="card">
      <p className="description">{text}</p>
    </div>
  );
}

export default Card;
