import "./Image.css"

const Image = ({ src, alt }) => (
  <img className="picture" src={src} alt={alt} />
);

export default Image;
