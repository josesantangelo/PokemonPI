import s from "./pokemon.module.css";
import { Link } from "react-router-dom";
export default function Pokemon({ name, types, id, img }) {
  return (
    <Link to="/detail" className={s.link}>
      <div id={s.card} className={types[0]}>
        <h3>{name}</h3>
        <h4>{types.join("/")}</h4>
        <h4>{id}</h4>
        <img src={img} alt="img poke" />
      </div>
    </Link>
  );
}
