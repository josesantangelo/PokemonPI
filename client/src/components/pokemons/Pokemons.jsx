import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  setPages,
  setSelectedPage,
  getExactPokemon,
} from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import Search from "../search/Search";
import s from "./pokemons.module.css";

export default function Pokemons() {
  //STATES
  let pokemons = useSelector((state) => state.pokemons);
  let exactPokemon = useSelector((state) => state.pokemon);
  let selectedPage = useSelector((state) => state.selectedPage);
  let filteredPokemons = useSelector((state) => state.filteredPokemons);
  //______________________________________________________________

  //USEEFFECT, TRAIGO POKEMONS Y GENERO LA CANTIDAD DE PAGINAS SEGUN CUANTOS LLEGUEN
  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getExactPokemon(null));
    dispatch(setSelectedPage(1));
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(getExactPokemon(null));
      dispatch(setSelectedPage(1));
    };
  }, []);

  console.log("poke", pokemons);
  function calcularMax() {
    if (filteredPokemons.length) {
      // console.log("page con filter");
      return Math.ceil(filteredPokemons.length / 12);
    } else {
      // console.log("page sin filter");
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
  let showFiltered = filteredPokemons.slice(
    selectedPage * limit - limit,
    selectedPage * limit
  );
  let loading = "let loading...";
  //__________________________________________________________________________________
  return (
    <>
      {!exactPokemon && !filteredPokemons && !pokemons && <h1>{loading}</h1>}
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

      {!exactPokemon &&
        filteredPokemons &&
        showFiltered.map((element) => {
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
    </>
  );
}
