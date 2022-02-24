import { useContext } from "react";
// import { FavContext } from "../components/WeatherCard";
// CONTEXT
import { FavContext } from "../App";
// CSS
import styled from "styled-components";

function Fav() {
  const favContext = useContext(FavContext);
  // const city = favContext[0]?.city;

  return (
    <FavSection>
      {console.log(favContext.fav[0])}
      <h1>Favorites</h1>
      <div>
        <h1>{favContext.fav[0]}</h1>
      </div>
      <div>
        <h1>{favContext.fav[1]}</h1>
      </div>
      <div>
        <h1>{favContext.fav[2]}</h1>
      </div>
    </FavSection>
  );
}

const FavSection = styled.div`
  height: 65vh;
  text-align: center;
`;

export default Fav;
