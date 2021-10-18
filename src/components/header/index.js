import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const location = useLocation();

  return (
    <div
      className="ioeman-header navbar sticky-top"
      style={{
        boxShadow: location.pathname === "/" && "0px 3px 6px white",
      }}
    >
      <Link to="/">
        <h3 className="font-weight-bold text-left">IOEMAN</h3>
      </Link>
    </div>
  );
};

export default Header;
