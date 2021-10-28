import { useState } from "react";
import { useDispatch } from "react-redux";
import { getExactPokemon } from "../../store/actions/actions.js";
//tiene que tomar el input, traer la ruta ...api.../input, y devolver el resultado a pokemons.

export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let onSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      dispatch(getExactPokemon(search));
    }
    console.log(search);
  };

  let onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ingresa tu Pokemon..."
          onChange={onChange}
          autoFocus
        />
        <input type="submit" value="O" />
      </form>
    </div>
  );
}
