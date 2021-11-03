import { useDispatch, useSelector } from "react-redux";
import { filterPokemons } from "../../store/actions/actions";
import s from "./type.module.css";

export default function Type({ name }) {
  const pokemons = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();
  const findByType = (type1, type2) => {
    if (!type2) {
      console.log("primer if");
      let filtered = pokemons.filter((element) =>
        element.types.includes(type1)
      );
      return dispatch(filterPokemons(filtered));
    }

    // console.log("segundo if");
    // let filtered = pokemons.filter(
    //   (element) =>
    //     element.types.includes(type1) || element.types.includes(type2)
    // );
    // return dispatch(filterPokemons(filtered));
  };

  return (
    <button id={s.type} className={name} onClick={() => findByType(`${name}`)}>
      {name.toUpperCase()}
    </button>
  );
}
