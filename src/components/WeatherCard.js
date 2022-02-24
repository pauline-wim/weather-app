// import Home from "../pages/Home";
import { useContext, useState, createContext } from "react";
// Context
// import { WeatherContext } from "../pages/Home";
import { FavContext } from "../App";
// CSS
import styled from "styled-components";

export const SelectCityContext = createContext();

function WeatherCard(props) {
  // const weatherContext = useContext(WeatherContext);
  const favContext = useContext(FavContext);
  // const [fav, setFav] = useState([]);
  //   console.log(weatherContext.weather);

  const handleClick = () => {
    // if (fav.length < 3) {
    //   setFav((prevFav) => [...prevFav, props.cityName]);
    // } else {
    //   return alert("You can't have more than three cities in your favorites");
    // }
    favContext.addFav(props.cityName);
  };

  // const favValue = {
  //   fav: fav,
  //   city: fav[0]?.city,
  // };

  return (
    // <FavContext.Provider value={favValue}>
    <Card>
      {/* {console.log(favContext)} */}
      <div className="contentWrapper">
        <div className="weatherInfo">
          <h1>{props.cityName}</h1>
          <p className="temp">{props.temp}°</p>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon weather"
          />
          <p>{props.description}</p>
        </div>
        <input
          className="addToFav"
          type="button"
          value="+"
          onClick={handleClick}
        />
      </div>
    </Card>
    // </FavContext.Provider>
  );
}

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  height: 360px;
  margin: 30px auto 0;
  display: flex;
  justify-content: flex-end;
  .contentWrapper {
    /* border: 2px solid green; */
    display: flex;
    gap: 70px;
    justify-content: space-between;
    .weatherInfo {
      /* margin-right: 80px; */
      /* border: 2px solid red; */
      margin: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* padding: auto; */
      h1 {
        margin-top: 0;
        font-size: 40px;
      }
      p {
        padding: 0;
        margin: 0;
      }
      .temp {
        padding-left: 20px;
        font-size: 80px;
      }
    }
    .addToFav {
      margin: 10px;
      font-size: 20px;
      border: 1px solid black;
      border-radius: 50%;
      background-color: transparent;
      height: 40px;
      width: 40px;
      cursor: pointer;
    }
  }
`;

export default WeatherCard;
