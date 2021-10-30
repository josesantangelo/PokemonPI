import "./App.css";
import AsydeTypes from "./components/asideTypes/AsydeTypes";
import Navbar from "./components/navbar/Navbar";
import Paginado from "./components/paginado/Paginado";
import Pokemons from "./components/pokemons/Pokemons.jsx";
import s from "./App.css";
import Welcome from "./components/welcome/Welcome";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Henry Pokemon</h1>
      <Paginado />
      <AsydeTypes />
      {/* <Route exact path="/" render={() => Pokemons} /> */}
      <Pokemons />
      {/* <Route exact path="/welcome" component={Welcome} /> */}
    </div>
  );
}

export default App;
