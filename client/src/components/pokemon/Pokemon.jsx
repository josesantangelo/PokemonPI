import s from "./pokemon.module.css";
import { useHistory } from "react-router-dom";
import { detailedPokemon, setId } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
export default function Pokemon({ name, types, id, img }) {
  let dispatch = useDispatch();
  let mapTypes = types.map((element) => element.name);
  let history = useHistory();
  function handleClick() {
    history.push(`/detail/${id}`);
  }
  return (
    <div
      id={s.card}
      className={mapTypes[0]}
      onClick={() => {
        // dispatch(detailedPokemon(id));
        dispatch(setId(id));
        handleClick();
      }}
    >
      <h3>{name}</h3>
      <h4>{mapTypes.join("/")}</h4>
      <img src={img} alt="img poke" />
    </div>
  );
}
