import s from "./pokemon.module.css";
import { Link } from "react-router-dom";
import { detailedPokemon } from "../../store/actions/actions";
import { useDispatch } from "react-redux";

export default function Pokemon({ name, types, id, img }) {
  let dispatch = useDispatch();
  return (
    <Link to="/detail" className={s.link}>
      <button
        id={s.card}
        className={types[0]}
        onClick={() => {
          dispatch(detailedPokemon(null));
          dispatch(detailedPokemon(id));
        }}
      >
        <h3>{name}</h3>
        <h4>{types.join("/")}</h4>
        <h4>{id}</h4>
        <img src={img} alt="img poke" />
      </button>
    </Link>
  );
}
