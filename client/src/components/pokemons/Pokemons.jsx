import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterPokemons,
  getPokemons,
  setPages,
  setSelectedPage,
} from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import Paginado from "../paginado/Paginado";

import s from "./pokemons.module.css";

export default function Pokemons() {
  //STATES
  const [loading, setLoading] = useState();
  let pokemons = useSelector((state) => state.pokemons);
  let exactPokemon = useSelector((state) => state.pokemon);
  let pages = useSelector((state) => state.pages);
  let selectedPage = useSelector((state) => state.selectedPage);
  let filteredPokemons = useSelector((state) => state.filteredPokemons);
  //______________________________________________________________

  //USEEFFECT, TRAIGO POKEMONS Y GENERO LA CANTIDAD DE PAGINAS SEGUN CUANTOS LLEGUEN
  let dispatch = useDispatch();
  useEffect(() => {
    // setLoading(true);
    // console.log("load " + loading);
    dispatch(setSelectedPage(1));
    dispatch(getPokemons());

    // dispatch(filterPokemons([]));
  }, []);

  // useEffect(() => {
  //   setLoading(false);
  //   console.log("load " + loading);
  // }, [pokemons, loading]);
  function calcularMax() {
    if (filteredPokemons.length) {
      console.log("page con filter");
      return Math.ceil(filteredPokemons.length / 12);
    } else {
      console.log("page sin filter");
      return Math.ceil(pokemons.length / 12);
    }
  }
  let max = calcularMax();
  //Adentro o afuera de useEffect funciona igual, pero afuera duplica los resultados
  useEffect(() => {
    dispatch(setPages(max));
  }, [dispatch, max]);

  //_______________________________________________________________________________

  //DETERMINO LA CANTIDAD DE POKEMONS POR PAGINA, UTILIZANDO EL STATE POKEMONS Y SELECTED PAGE PARA CALCULARLO
  let limit = 12;
  let show = pokemons.slice(selectedPage * limit - limit, selectedPage * limit);
  // console.log("show:", show);
  // console.log("selected", selectedPage);
  let load = "loading...";
  //__________________________________________________________________________________
  return (
    <>
      {!show && (
        <h1>
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </h1>
      )}

      {show && (
        <div className={s.cards}>
          {exactPokemon && (
            <Pokemon
              name={exactPokemon.name}
              img={exactPokemon.img}
              types={exactPokemon.types}
              id={exactPokemon.id}
            ></Pokemon>
          )}

          {!exactPokemon &&
            !filteredPokemons.length &&
            show.map((element) => {
              return (
                <Pokemon
                  name={element.name}
                  types={element.types}
                  key={element.id}
                  id={element.id}
                  img={element.img}
                ></Pokemon>
              );
            })}

          {filteredPokemons &&
            filteredPokemons.map((element) => {
              return (
                <Pokemon
                  name={element.name}
                  types={element.types}
                  key={element.id}
                  id={element.id}
                  img={element.img}
                ></Pokemon>
              );
            })}
        </div>
      )}
    </>
  );
}
