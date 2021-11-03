import { useDispatch, useSelector } from "react-redux";
import { filterPokemons } from "../../store/actions/actions";
import s from "./filters.module.css";
import {
  alphabeticOrder,
  sorterOne,
  sorterForty,
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

  //PROTO FILTRADO POR TIPO

  return (
    <div className={s.buttons}>
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
