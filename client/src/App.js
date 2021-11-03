import "./App.css";
// import AsydeTypes from "./components/asideTypes/AsydeTypes";
import Navbar from "./components/navbar/Navbar";
import Paginado from "./components/paginado/Paginado";
// import Pokemons from "./components/pokemons/Pokemons.jsx";
// import s from "./App.css";
import Welcome from "./components/welcome/Welcome";
import { Route } from "react-router";
import BodyContainer from "./components/bodyContainer/BodyContainer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

// const changePage = (page) => {
//   console.log(page);
// };
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home">
        <Navbar />
        <Header />
        {/* <Paginado /> */}
        <BodyContainer />
      </Route>
      <Route exact path="/form">
        {/* <Form /> */}
      </Route>
    </div>
  );
}

export default App;
