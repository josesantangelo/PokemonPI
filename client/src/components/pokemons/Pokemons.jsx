import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  setPages,
  setSelectedPage,
  getExactPokemon,
  getPokemonsOriginal,
} from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import Search from "../search/Search";
import s from "./pokemons.module.css";

export default function Pokemons() {
  //STATES
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);
  let pokemons = useSelector((state) => state.pokemons);
  // let exactPokemon = useSelector((state) => state.pokemon);
  let selectedPage = useSelector((state) => state.selectedPage);

  const [pokemonList, setPokemonList] = useState(pokemonsOriginal);

  //______________________________________________________________

  //USEEFFECT, TRAIGO POKEMONS Y GENERO LA CANTIDAD DE PAGINAS SEGUN CUANTOS LLEGUEN
  let dispatch = useDispatch();
  useEffect(() => {
    console.log("USE EFFECT 1");
    dispatch(getPokemonsOriginal());
    // dispatch(getExactPokemon(null));
    // dispatch(setSelectedPage(1));
  }, []);

  useEffect(() => {
    dispatch(getPokemons(pokemonsOriginal));
  }, [pokemonsOriginal, dispatch]);

  useEffect(() => {
    console.log("USE EFFECT 2");
    dispatch(setPages(Math.ceil(pokemons.length / 12)));
    dispatch(setSelectedPage(1));
    setPokemonList(() =>
      pokemons.slice(selectedPage * 12 - 12, selectedPage * 12)
    );
  }, [pokemons]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(getExactPokemon(null));
  //     dispatch(setSelectedPage(1));
  //   };
  // }, []);

  // function calcularMax() {
  //   if (filteredPokemons.length) {
  //     // console.log("page con filter");
  //     return Math.ceil(filteredPokemons.length / 12);
  //   } else {
  //     // console.log("page sin filter");
  //     return Math.ceil(pokemons.length / 12);
  //   }
  // }
  // let max = calcularMax();
  //Adentro o afuera de useEffect funciona igual, pero afuera duplica los resultados

  //_______________________________________________________________________________

  //DETERMINO LA CANTIDAD DE POKEMONS POR PAGINA, UTILIZANDO EL STATE POKEMONS Y SELECTED PAGE PARA CALCULARLO
  // let limit = 12;

  // let pokemonList = pokemons.slice(selectedPage * 12 - 12, selectedPage * 12);

  // let showFiltered = filteredPokemons.slice(
  //   selectedPage * limit - limit,
  //   selectedPage * limit
  // );
  let loading = "let loading...";
  //__________________________________________________________________________________
  return (
    <>
      {!pokemonList.length && <p>{loading}</p>}
      {pokemonList &&
        pokemonList.map((pokemon) => {
          return (
            <Pokemon
              name={pokemon.name}
              types={pokemon.types}
              key={pokemon.id}
              id={pokemon.id}
              img={pokemon.img}
            ></Pokemon>
          );
        })}
    </>
  );
}

// {
//   /* {!exactPokemon && !filteredPokemons && !pokemons && <h1>{loading}</h1>} */
// }
// {
//   /* {exactPokemon && (
//   <Pokemon
//     name={exactPokemon.name}
//     img={exactPokemon.img}
//     types={exactPokemon.types}
//     id={exactPokemon.id}
//   ></Pokemon>
// )} */
// }
// {
//   /*
// {!exactPokemon &&
//   !filteredPokemons.length &&
//   show.map((element) => {
//     return (
//       <Pokemon
//         name={element.name}
//         types={element.types}
//         key={element.id}
//         id={element.id}
//         img={element.img}
//       ></Pokemon>
//     );
//   })}

// {!exactPokemon &&
//   filteredPokemons &&
//   showFiltered.map((element) => {
//     return (
//       <Pokemon
//         name={element.name}
//         types={element.types}
//         key={element.id}
//         id={element.id}
//         img={element.img}
//       ></Pokemon>
//     );
//   })}*/
// }
