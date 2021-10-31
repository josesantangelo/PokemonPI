import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../store/actions/actions";
import Type from "../types/Type";
// import s from "./asydeTypes.module.css";

export default function Pokemons() {
  let types = useSelector((state) => state.types);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    console.log("types: " + types.data);
  }, []);
  return (
    <div className="container">
      {types.map((element) => {
        return <Type name={element.name} key={element.name} />;
      })}
    </div>
  );
}
