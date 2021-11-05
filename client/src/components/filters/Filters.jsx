import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemons,
  getExactPokemon,
  setSelectedPage,
} from "../../store/actions/actions";
import s from "./filters.module.css";
import {
  alphabeticOrder,
  sorterOne,
  sorterForty,
  sorterWeakest,
  sorterStrongest,
} from "../../utils/functions.js";
export default function Filters() {
  const pokemons = useSelector((state) => state.pokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  let dispatch = useDispatch();
  //PROTO ORDENAMIENTO POR NOMBRE
  let empty = [
    {
      name: `El equipo Rocket estuvo aqui!`,
      types: [],
      id: "",
      img: "https://www.pngarea.com/pngm/70/6557847_rocket-league-ball-png-team-rocket-pokemon-logo.png",
    },
  ];
  const clearFilters = () => {
    dispatch(filterPokemons([]));
    dispatch(getExactPokemon(null));
    dispatch(setSelectedPage(1));
    pokemons.sort(sorterOne);
  };

  const apiOrDB = (value, cb) => {
    let filtered;
    console.log("pokemons de apiordb", pokemons);
    if (value === "api") {
      filtered = pokemons.filter((element) => typeof element.id === "number");
      console.log("filtered api", filtered);
      return dispatch(filterPokemons(filtered));
    }
    if (value === "DB") {
      filtered = pokemons.filter((element) => element.id.length > 5);
      filtered.length
        ? dispatch(filterPokemons(filtered))
        : dispatch(filterPokemons(empty));
    }
  };

  //PROTO FILTRADO POR TIPO

  return (
    <div className={s.buttons}>
      {/* //CHEQUEAR QUE ANDEN!!! */}
      <button
        className={s.button}
        onClick={() => apiOrDB("api", clearFilters())}
      >
        API
      </button>
      <button
        className={s.button}
        onClick={() => apiOrDB("DB", clearFilters())}
      >
        DB
      </button>
      <button
        className={s.button}
        onClick={() => pokemons.sort(sorterWeakest, clearFilters())}
      >
        ORDENAR ATTACK menor mayor
      </button>
      <button
        className={s.button}
        onClick={() => pokemons.sort(sorterStrongest, clearFilters())}
      >
        ORDENAR ATTACK mayor menor
      </button>
      <button
        className={s.button}
        onClick={() => {
          pokemons.sort(sorterOne, clearFilters());
        }}
      >
        ORDENAR POR ID menor mayor
      </button>
      <button
        className={s.button}
        onClick={() => pokemons.sort(sorterForty, clearFilters())}
      >
        ORDENAR POR ID mayor menor
      </button>

      <button
        className={s.button}
        onClick={() => alphabeticOrder(pokemons, "a", clearFilters())}
      >
        ORDENAR POR A-Z
      </button>
      <button
        className={s.button}
        onClick={() => alphabeticOrder(pokemons, "z", clearFilters())}
      >
        ORDENAR POR Z-A
      </button>
      <button className={s.button} onClick={() => clearFilters()}>
        CLEAR
      </button>
    </div>
  );
}
