import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div>
      <Link to="/" className="link-spacing">
        {" "}
        Home{" "}
      </Link>
      <Link to="/create" className="link-spacing">
        {" "}
        Create a Crewmate{" "}
      </Link>
      <Link to="/gallery" className="link-spacing">
        {" "}
        Crewmate Gallery
      </Link>
    </div>
  );
}

export default Navbar;
