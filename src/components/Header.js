import { Link } from "react-router-dom";
// CSS
import styled from "styled-components";

function Header() {
  return (
    <HeaderSection>
      <img src="" alt="sun" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/fav">Favorites</Link>
      </nav>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  nav {
    /* border: 2px solid red; */
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
