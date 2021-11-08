import { useDispatch, useSelector } from "react-redux";
import { filterPokemons } from "../../store/actions/actions";
import s from "./type.module.css";

export default function Type({ name, id_api }) {
  const pokemons = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();

  return (
    <option id={id_api} value={name} className={name}>
      {name[0].toUpperCase() + name.slice(1)}
    </option>
  );
}
