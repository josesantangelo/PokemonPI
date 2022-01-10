import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getPokemonsOrigin,
  setSelectedPage,
} from "../../store/actions/actions";
import s from "./filters.module.css";
import {
  alphabeticOrder,
  sorterOne,
  sorterForty,
  sorterWeakest,
  sorterStrongest,
  apiOrDB,
} from "../../utils/functions.js";
import { useEffect } from "react";
import pika from "../../utils/img/Detective_Pikachu.png";
export default function Filters() {
  const pokemonsOriginal = useSelector((state) => state.pokemonsOriginal);
  const pokemonState = useSelector((state) => state.pokemons);
  const pokemonsByOrigin = useSelector((state) => state.pokemonsByOrigin);
  console.log("origin", pokemonsByOrigin);
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
  let search = document.getElementById("searchBar");

  useEffect(() => {
    return () => {
      dispatch(getPokemons(pokemonsOriginal.sort(sorterOne)));
      dispatch(getPokemonsOrigin([]));
      dispatch(setSelectedPage(1));
    };
  }, []);

  const clearFilters = () => {
    dispatch(getPokemons(pokemonsOriginal.sort(sorterOne)));
    dispatch(getPokemonsOrigin([]));
    dispatch(setSelectedPage(1));
    selectOrder.value = "0";
    selectOrigin.value = "0";
    selectType.value = "0";
    search.value = "";
  };

  const selecter = async (value) => {
    let result;
    let resultOrigin;
    switch (value) {
      case "originAPI":
        pokemonState
          ? (resultOrigin = apiOrDB(pokemonState, "api", empty))
          : alert("use original");

        break;
      case "originDB":
        pokemonState
          ? (resultOrigin = apiOrDB(pokemonState, "DB", empty))
          : alert("use original");

        break;
      case "originAll":
        pokemonState
          ? (resultOrigin = apiOrDB(pokemonState, "all", empty))
          : alert("use original");

        break;

      case "weakest":
        pokemonsByOrigin.length
          ? (resultOrigin = pokemonsByOrigin.sort(sorterWeakest))
          : (result = pokemonState.sort(sorterWeakest));

        break;
      case "strongest":
        pokemonsByOrigin.length
          ? (resultOrigin = pokemonsByOrigin.sort(sorterStrongest))
          : (result = pokemonState.sort(sorterStrongest));

        break;
      case "idOne":
        pokemonsByOrigin.length
          ? (resultOrigin = pokemonsByOrigin.sort(sorterOne))
          : (result = pokemonState.sort(sorterOne));

        break;
      case "idForty":
        pokemonsByOrigin.length
          ? (resultOrigin = pokemonsByOrigin.sort(sorterForty))
          : (result = pokemonState.sort(sorterForty));

        break;
      case "A_Z":
        pokemonsByOrigin.length
          ? (resultOrigin = alphabeticOrder(pokemonsByOrigin, "a"))
          : (result = alphabeticOrder(pokemonState, "a"));

        break;
      case "Z_A":
        pokemonsByOrigin.length
          ? (resultOrigin = alphabeticOrder(pokemonsByOrigin, "z"))
          : (result = alphabeticOrder(pokemonState, "z"));

        break;

      default:
        alert("unknown filter!");
        break;
    }
    //Al mantener length, no impacta cambio en la posicion de memoria
    //con Object.assign creo una nueva posicion.
    //usar un useState muleto

    if (resultOrigin) {
      dispatch(getPokemonsOrigin(Object.assign([], resultOrigin)));
    } else {
      dispatch(getPokemons(Object.assign([], result)));
      dispatch(getPokemonsOrigin([]));
    }

    dispatch(setSelectedPage(1));
  };

  return (
    <>
      <div className={s.container}>
        <h5 className={s.title}>Ordenar:</h5>
        <select
          className={s.buttons}
          id="OrderSelect"
          onChange={(e) => selecter(e.target.value)}
          defaultValue="0"
        >
          {/* //CHEQUEAR QUE ANDEN!!! */}
          <option disabled id="zero" value="0" className={s.button}></option>
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
          defaultValue="0"
        >
          <option disabled value="0" className={s.button}></option>

          <option value="originAPI" className={s.button}>
            Pokemons API
          </option>
          <option value="originDB" className={s.button}>
            Pokemons DB
          </option>
          <option value="originAll" className={s.button}>
            Todos
          </option>
        </select>
      </div>
      <button
        className={s.buttonClear}
        onClick={() => {
          clearFilters();
        }}
      >
        Limpiar filtros
      </button>
      <img className={s.pikaImg} src={pika} alt="pikachu" />
    </>
  );
}
