import Lista from "./List";
import Option from "./Option";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {Lista.map(( element, index ) => (
        <Option key={index} text={element.text} href={element.href}/>
      ))}
    </div>
  );
}

export default Navbar;
