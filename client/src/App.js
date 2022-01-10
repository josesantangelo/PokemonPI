import "./App.css";
import {
  SiReact,
  SiRedux,
  SiCss3,
  SiSequelize,
  SiPostgresql,
} from "react-icons/si";
import Welcome from "./components/welcome/Welcome";
import { Link, Route } from "react-router-dom";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Detail from "./components/detail/Detail";
import Pokemons from "./components/pokemons/Pokemons";
import Search from "./components/search/Search";
import Paginado from "./components/paginado/Paginado";
import Filters from "./components/filters/Filters";
import AsydeTypes from "./components/asideTypes/AsydeTypes.jsx";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path={`/detail/:id`}>
        <Detail />
      </Route>
      <Route exact path="/form">
        <Form />
      </Route>
      <Route exact path="/home">
        <main>
          <Header />

          <aside>
            <AsydeTypes />
            <Filters />
          </aside>
          <section>
            <div className="search">
              <Search />
              <Link className="linkForm" to="/form">
                Crea tu pokemon
              </Link>
            </div>
            <div className="pokemons">
              <Pokemons />
            </div>
            <div className="paginado">
              <Paginado />
            </div>
          </section>

          <footer>
            <div className="icons">
              <SiReact />
              <SiRedux />
              <SiCss3 />
              <SiSequelize />
              <SiPostgresql />
            </div>
            <div className="name">Jose Luis Santangelo, Cohorte FT 18-A</div>
          </footer>
        </main>
      </Route>
    </div>
  );
}

export default App;
