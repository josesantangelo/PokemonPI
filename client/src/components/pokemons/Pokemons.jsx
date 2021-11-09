import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  setPages,
  getPokemonsOriginal,
} from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import charmander from "../../utils/img/charmander.gif";
import gif2 from "../../utils/img/gif2.gif";
import pikachu from "../../utils/img/pikachu.gif";
import s from "./pokemons.module.css";
export default function Pokemons() {
  //STATES
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);
  let pokemons = useSelector((state) => state.pokemons);

  let selectedPage = useSelector((state) => state.selectedPage);

  //______________________________________________________________

  //USEEFFECT, TRAIGO POKEMONS Y GENERO LA CANTIDAD DE PAGINAS SEGUN CUANTOS LLEGUEN
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsOriginal());
  }, []);

  useEffect(() => {
    dispatch(getPokemons(pokemonsOriginal));
  }, [pokemonsOriginal, dispatch]);

  useEffect(() => {
    dispatch(setPages(Math.ceil(pokemons.length / 12)));
  }, [pokemons]);

  //______________________________________________________________________________

  //DETERMINO LA CANTIDAD DE POKEMONS POR PAGINA, UTILIZANDO EL STATE POKEMONS Y SELECTED PAGE PARA CALCULARLO

  let pokemonList = pokemons.slice(selectedPage * 12 - 12, selectedPage * 12);

  let loading = "let loading...";
  //__________________________________________________________________________________
  return (
    <>
      {!pokemonList.length && (
        <>
          <div className={s.divLoading}>
            <img src={pikachu} alt="" />
          </div>

          <div className={s.divLoading}>
            <img src={pikachu} alt="" />
          </div>

          <div className={s.divLoading}>
            <img src={pikachu} alt="" />
          </div>

          <div className={s.divLoading}>
            <img src={pikachu} alt="" />
          </div>
        </>
      )}
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
