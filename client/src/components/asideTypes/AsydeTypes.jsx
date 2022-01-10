import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTypes,
  getPokemons,
  getPokemonsOrigin,
  setSelectedPage,
} from "../../store/actions/actions";
import noPoke from "../../utils/img/noPokemon.png";
import s from "./asydeTypes.module.css";
import { alphabeticOrder } from "../../utils/functions.js";
export default function Pokemons() {
  let types = useSelector((state) => state.types);
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);
  const pokemonsByOrigin = useSelector((state) => state.pokemonsByOrigin);
  const pokemons = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  let empty = [
    {
      name: `El equipo Rocket estuvo aqui!`,
      types: [],
      id: "",
      img: noPoke,
    },
  ];

  let sortedTypes = alphabeticOrder(types, "a");

  const findByType = async (type1) => {
    let filtered;
    //Uso pokemons y no pokemonsOrigins, para no "achicar" dicho estado, y poder refiltrar por tipo varias veces

    if (pokemonsByOrigin.length && pokemons.length > 1) {
      filtered = pokemons.filter(
        (pokemon) =>
          (pokemon.types[0]?.name === type1 ||
            pokemon.types[1]?.name === type1) &&
          pokemon.id.length > 6
      );
      if (filtered.length) {
        dispatch(getPokemonsOrigin(filtered));
      } else {
        dispatch(getPokemonsOrigin(empty));
        // dispatch(getPokemons(empty));
      }
    } else {
      filtered = pokemonsOriginal.filter(
        (pokemon) =>
          pokemon.types[0]?.name === type1 || pokemon.types[1]?.name === type1
      );
      if (filtered.length) {
        dispatch(getPokemons(filtered));
      } else {
        dispatch(getPokemons(empty));
      }
    }

    dispatch(setSelectedPage(1));
  };
  return (
    <div>
      <h5>Tipo:</h5>
      <select
        className={s.container}
        id="selectType"
        onChange={(e) => findByType(e.target.value)}
      >
        <option selected disabled value="0">
          {"            "}
        </option>
        {sortedTypes.map((element) => {
          return (
            <option
              name={element.name}
              id_api={element.id_api}
              key={element.name}
            >
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
