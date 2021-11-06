import "./App.css";
import Welcome from "./components/welcome/Welcome";
import { Link, Route } from "react-router-dom";
import BodyContainer from "./components/bodyContainer/BodyContainer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Detail from "./components/detail/Detail";
import Pokemons from "./components/pokemons/Pokemons";
import Search from "./components/search/Search";
import Paginado from "./components/paginado/Paginado";
import Filters from "./components/filters/Filters";
import AsydeTypes from "./components/asideTypes/AsydeTypes.jsx";
function App() {
  return (
    <div className="App">
      <Route exact path="/home">
        <main>
          <Header />

          <aside>
            <Filters />
            <AsydeTypes />
          </aside>

          <section>
            <div className="search">
              <Search />
              <Link>Crea tu pokemon</Link>
            </div>
            <div className="pokemons">
              <Pokemons />
            </div>
            <div className="paginado">
              <Paginado />
            </div>
          </section>
          <footer>Footer</footer>
        </main>
      </Route>
    </div>

    // <div className="App">
    //   <Route exact path="/">
    //     <Welcome />
    //   </Route>
    //   <Route exact path="/home">
    //     {/* <Navbar /> */}
    //     <Header />
    //     <BodyContainer />
    //   </Route>
    //   <Route exact path="/form">
    //     <Form />
    //   </Route>
    //   <Route exact path="/detail">
    //     <Detail />
    //   </Route>
    // </div>
  );
}

export default App;
