import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Fav from "./pages/Fav";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <div>
        <h1>What's the Weather like Today?</h1>
      </div> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fav" component={Fav} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
