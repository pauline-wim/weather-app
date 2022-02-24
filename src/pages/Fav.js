import { useContext } from "react";
import { FavContext } from "../components/WeatherCard";
// CSS
import styled from "styled-components";

function Fav() {
  const favContext = useContext(FavContext);
  // const city = favContext[0]?.city;

  return (
    <FavSection>
      {/* {console.log(favContext[0])} */}
      <h1>Favorites</h1>
      <div>{favContext[0] ? <h1>{favContext[0]?.city}</h1> : null}</div>
    </FavSection>
  );
}

const FavSection = styled.div`
  height: 65vh;
  text-align: center;
`;

export default Fav;
