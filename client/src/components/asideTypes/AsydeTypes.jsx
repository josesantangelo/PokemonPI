import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTypes,
  getPokemons,
  setSelectedPage,
} from "../../store/actions/actions";

import s from "./asydeTypes.module.css";
import pika from "../../utils/img/Detective_Pikachu.png";
import { alphabeticOrder } from "../../utils/functions.js";
export default function Pokemons() {
  let types = useSelector((state) => state.types);
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  let empty = [
    {
      name: `El equipo Rocket estuvo aqui!`,
      types: [],
      id: "",
      img: "https://www.pngarea.com/pngm/70/6557847_rocket-league-ball-png-team-rocket-pokemon-logo.png",
    },
  ];

  let sortedTypes = alphabeticOrder(types, "a");

  const findByType = async (type1) => {
    let filtered = pokemonsOriginal.filter(
      (pokemon) =>
        pokemon.types[0]?.name === type1 || pokemon.types[1]?.name === type1
    );
    if (filtered.length) {
      dispatch(getPokemons(filtered));
    } else {
      dispatch(getPokemons(empty));
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
      <img src={pika} alt="pikachu" />
    </div>
  );
}
