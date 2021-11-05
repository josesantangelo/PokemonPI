import { useDispatch, useSelector } from "react-redux";
import { filterPokemons } from "../../store/actions/actions";
import s from "./type.module.css";
let empty = [
  {
    name: `El equipo Rocket estuvo aqui!`,
    types: [],
    id: "",
    img: "https://www.pngarea.com/pngm/70/6557847_rocket-league-ball-png-team-rocket-pokemon-logo.png",
  },
];
export default function Type({ name }) {
  const pokemons = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();

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
    <button id={s.type} className={name} onClick={() => findByType(`${name}`)}>
      {name.toUpperCase()}
    </button>
  );
}
