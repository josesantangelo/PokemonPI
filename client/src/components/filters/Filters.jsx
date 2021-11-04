import { useDispatch, useSelector } from "react-redux";
import { filterPokemons, getExactPokemon } from "../../store/actions/actions";
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

  console.log("pokemons", pokemons);
  console.log("filter", filteredPokemons);

  let dispatch = useDispatch();
  //PROTO ORDENAMIENTO POR NOMBRE

  const clearFilters = () => {
    dispatch(filterPokemons([]));
    pokemons.sort(sorterOne);
  };

  const apiOrDB = (value, cb) => {
    let filtered;
    if (value === "api") {
      filtered = pokemons.filter((element) => element.id.length < 5);
      return dispatch(filterPokemons(filtered));
    }
    if (value === "DB") {
      filtered = pokemons.filter((element) => element.id.length > 5);
      return dispatch(filterPokemons(filtered));
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
        onClick={() => pokemons.sort(sorterOne, clearFilters())}
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
