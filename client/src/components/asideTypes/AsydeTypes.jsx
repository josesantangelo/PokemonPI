import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, filterPokemons } from "../../store/actions/actions";
import Type from "../types/Type";
import s from "./asydeTypes.module.css";

export default function Pokemons() {
  let types = useSelector((state) => state.types);
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
      img: "https://www.pngarea.com/pngm/70/6557847_rocket-league-ball-png-team-rocket-pokemon-logo.png",
    },
  ];
  const findByType = async (type1, type2) => {
    if (!type2) {
      let filtered = pokemons.filter(
        (element) =>
          element.types[0]?.name === type1 || element.types[1]?.name === type1
      );
      if (filtered.length) {
        return dispatch(filterPokemons(filtered));
      } else {
        return dispatch(filterPokemons(empty));
      }
    }

    // console.log("segundo if");
    // let filtered = pokemons.filter(
    //   (element) =>
    //     element.types.includes(type1) || element.types.includes(type2)
    // );
    // return dispatch(filterPokemons(filtered));
  };

  return (
    <div>
      <h5>Tipo:</h5>
      <select
        className={s.container}
        onChange={(e) => findByType(e.target.value)}
      >
        <option selected disabled>
          {"            "}
        </option>
        {types.map((element) => {
          return (
            <Type
              name={element.name}
              id_api={element.id_api}
              key={element.name}
            />
          );
        })}
      </select>
    </div>
  );
}
