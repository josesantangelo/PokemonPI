import "./App.css";
// import AsydeTypes from "./components/asideTypes/AsydeTypes";
import Navbar from "./components/navbar/Navbar";
import Paginado from "./components/paginado/Paginado";
// import Pokemons from "./components/pokemons/Pokemons.jsx";
// import s from "./App.css";
import Welcome from "./components/welcome/Welcome";
import { Route } from "react-router";
import BodyContainer from "./components/bodyContainer/BodyContainer";
const changePage = (page) => {
  console.log(page);
};
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home">
        <Navbar />
        <Paginado changePage={changePage} />
        <BodyContainer />
      </Route>
    </div>
  );
}

export default App;
