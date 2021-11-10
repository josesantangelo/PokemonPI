import { useState } from "react";
import { useDispatch } from "react-redux";
import { getExactPokemon, getPokemons } from "../../store/actions/actions.js";
import s from "./search.module.css";
import image from "../../utils/img/pokebola.svg";
//tiene que tomar el input, traer la ruta ...api.../input, y devolver el resultado a pokemons.

export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let selectOrder = document.getElementById("OrderSelect");
  let selectOrigin = document.getElementById("orderOrigin");
  let selectType = document.getElementById("selectType");
  let searchBar = document.getElementById("searchBar");
  let onSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      dispatch(getPokemons([]));
      setTimeout(() => {
        dispatch(getExactPokemon(search));
        setSearch("");
        searchBar.value = "";
      }, 1000);
    }

    selectOrder.value = "0";
    selectOrigin.value = "0";
    selectType.value = "0";
  };

  let onChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={s.formSearch}>
        <input
          type="text"
          id="searchBar"
          className={s.input}
          placeholder="Ingresá tu Pokemon"
          onChange={onChange}
          autoFocus
          onSubmit={(e) => (e.target.value = "")}
          autoComplete="false"
        />
        <button type="submit" value="O" className={s.buttonSearch}>
          <img src={image} alt="O" />
        </button>
      </form>
    </div>
  );
}
