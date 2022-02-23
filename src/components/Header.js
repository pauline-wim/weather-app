import { Link } from "react-router-dom";
// CSS
import styled from "styled-components";

function Header() {
  return (
    <HeaderSection>
      <h2>
        <span className="emoji">&#9925;</span> What's The Weather Like Today?
      </h2>
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
  align-items: center;
  padding: 0 30px;
  .emoji {
    font-size: 40px;
    padding-right: 10px;
  }
  nav {
    /* border: 2px solid red; */
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
