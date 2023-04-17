import { List } from "./List";
import Option from "./Option";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {List.map((section) => (
        <Option key={section} option={section} />
      ))}
    </div>
  );
}

export default Navbar;
