import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>      
      <Link to="/">Styled</Link>
      <Link to="/list">Lists</Link>
    </nav>
  );
};

export default Navbar;
