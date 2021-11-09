import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setSelectedPage } from "../../store/actions/actions";
import s from "./filters.module.css";
import {
  alphabeticOrder,
  sorterOne,
  sorterForty,
  sorterWeakest,
  sorterStrongest,
} from "../../utils/functions.js";
export default function Filters() {
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);
  const pokemonState = useSelector((state) => state.pokemons);
  let empty = [
    {
      name: `El equipo Rocket estuvo aqui!`,
      types: [],
      id: "",
      img: "https://www.pngarea.com/pngm/70/6557847_rocket-league-ball-png-team-rocket-pokemon-logo.png",
    },
  ];

  let dispatch = useDispatch();
  let selectOrder = document.getElementById("OrderSelect");
  let selectOrigin = document.getElementById("orderOrigin");
  let selectType = document.getElementById("selectType");

  const apiOrDB = (arr, value) => {
    let filtered;
    if (value === "api") {
      filtered = arr.filter((element) => typeof element.id === "number");
    }
    if (value === "DB") {
      filtered = arr.filter((element) => element.id.length > 5);
    }

    return filtered.length ? filtered : empty;
  };

  const clearFilters = () => {
    dispatch(getPokemons(pokemonsOriginal.sort(sorterOne)));

    selectOrder.value = "0";
    selectOrigin.value = "0";
    selectType.value = "0";
  };

  const selecter = async (value) => {
    let result;

    switch (value) {
      case "originAPI":
        pokemonState
          ? (result = apiOrDB(pokemonState, "api"))
          : (result = apiOrDB(pokemonsOriginal, "api"));
        break;
      case "originDB":
        pokemonState
          ? (result = apiOrDB(pokemonState, "DB"))
          : (result = apiOrDB(pokemonsOriginal, "DB"));
        break;
      case "weakest":
        pokemonState
          ? (result = pokemonState.sort(sorterWeakest))
          : (result = pokemonsOriginal.sort(sorterWeakest));

        break;
      case "strongest":
        pokemonState
          ? (result = pokemonState.sort(sorterStrongest))
          : (result = pokemonsOriginal.sort(sorterStrongest));

        break;
      case "idOne":
        pokemonState
          ? (result = pokemonState.sort(sorterOne))
          : (result = pokemonsOriginal.sort(sorterOne));

        break;
      case "idForty":
        pokemonState
          ? (result = pokemonState.sort(sorterForty))
          : (result = pokemonsOriginal.sort(sorterForty));

        break;
      case "A_Z":
        pokemonState
          ? (result = alphabeticOrder(pokemonState, "a"))
          : (result = alphabeticOrder(pokemonsOriginal, "a"));

        break;
      case "Z_A":
        pokemonState
          ? (result = alphabeticOrder(pokemonState, "z"))
          : (result = alphabeticOrder(pokemonsOriginal, "z"));
        break;

      default:
        alert("unknown filter!");
        break;
    }

    //Al mantener length, no impacta cambio en la posicion de memoria
    //con Object.assign creo una nueva posicion.
    dispatch(getPokemons(Object.assign([], result)));
    dispatch(setSelectedPage(1));
  };

  return (
    <>
      <button
        className={s.buttonClear}
        onClick={() => {
          clearFilters();
        }}
      >
        Limpiar filtros
      </button>
      <div className={s.container}>
        <h5 className={s.title}>Ordenar:</h5>
        <select
          className={s.buttons}
          id="OrderSelect"
          onChange={(e) => selecter(e.target.value)}
        >
          {/* //CHEQUEAR QUE ANDEN!!! */}
          <option
            selected
            disabled
            id="zero"
            value="0"
            className={s.button}
          ></option>
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
        </select>
      </div>
      <div className={s.container}>
        <h5 className={s.title}>Origen:</h5>
        <select
          className={s.buttons}
          onChange={(e) => selecter(e.target.value)}
          id="orderOrigin"
        >
          <option selected disabled value="0" className={s.button}></option>
          <option value="originAPI" className={s.button}>
            Pokemons API
          </option>
          <option value="originDB" className={s.button}>
            Pokemons DB
          </option>
        </select>
      </div>
    </>
  );
}
