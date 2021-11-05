import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getExactPokemon,
  detailedPokemon,
} from "../../store/actions/actions.js";
import s from "./search.module.css";
import image from "../../utils/img/pokebola.svg";
//tiene que tomar el input, traer la ruta ...api.../input, y devolver el resultado a pokemons.

export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let onSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      dispatch(getExactPokemon(search));
      setSearch("");
    }

    console.log(search);
  };

  let onChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={s.formSearch}>
        <input
          className={s.input}
          placeholder="Ingresá tu Pokemon"
          onChange={onChange}
          autoFocus
          onSubmit={(e) => (e.target.value = "")}
        />
        <button type="submit" value="O" className={s.buttonSearch}>
          <img src={image} alt="O" />
        </button>
      </form>
    </div>
  );
}
