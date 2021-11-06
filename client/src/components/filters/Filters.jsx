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

  function selecter(value) {
    switch (value) {
      case "originAPI":
        return apiOrDB("api", clearFilters());
      case "originDB":
        return apiOrDB("DB", clearFilters());
      case "weakest":
        return pokemons.sort(sorterWeakest, clearFilters());
      case "strongest":
        return pokemons.sort(sorterStrongest, clearFilters());
      case "idOne":
        return pokemons.sort(sorterOne, clearFilters());
      case "idForty":
        return pokemons.sort(sorterForty, clearFilters());
      case "A_Z":
        return alphabeticOrder(pokemons, "a", clearFilters());
      case "Z_A":
        return alphabeticOrder(pokemons, "z", clearFilters());
      case "clear":
        return clearFilters();
      default:
        break;
    }
  }

  //PROTO FILTRADO POR TIPO

  return (
    <>
      <div className={s.container}>
        <h5 className={s.title}>Ordenar:</h5>
        <select
          className={s.buttons}
          onChange={(e) => selecter(e.target.value)}
        >
          {/* //CHEQUEAR QUE ANDEN!!! */}
          <option selected disabled className={s.button}></option>
          <option value="A_Z" className={s.button}>
            Alfabetico A-Z
          </option>
          <option value="Z_A" className={s.button}>
            Alfabetico Z-A
          </option>
          <option value="weakest" className={s.button}>
            Menor ataque
          </option>
          <option value="strongest" className={s.button}>
            Mayor ataque
          </option>
          <option value="idOne" className={s.button}>
            Menor ID
          </option>
          <option value="idForty" className={s.button}>
            Mayor ID
          </option>
          <option value="clear" className={s.button}>
            Clear
          </option>
        </select>
      </div>
      <div className={s.container}>
        <h5 className={s.title}>Origen:</h5>
        <select
          className={s.buttons}
          onChange={(e) => selecter(e.target.value)}
        >
          <option selected disabled className={s.button}></option>
          <option value="originAPI" className={s.button}>
            Pokemons de API
          </option>
          <option value="originDB" className={s.button}>
            Pokemons creados
          </option>
        </select>
      </div>
    </>
  );
}
