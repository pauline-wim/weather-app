import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="" alt="sun" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/fav">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
