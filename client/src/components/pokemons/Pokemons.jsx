import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import s from "./pokemons.module.css";

export default function Pokemons() {
  let pokemons = useSelector((state) => state.pokemons);
  let exactPokemon = useSelector((state) => state.pokemon);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className={s.cards}>
      {exactPokemon && (
        <Pokemon
          name={exactPokemon.name}
          img={exactPokemon.img}
          types={exactPokemon.types}
          id={exactPokemon.id}
        ></Pokemon>
      )}

      {!exactPokemon &&
        pokemons.map((element) => {
          return (
            <Pokemon
              name={element.name}
              types={element.types}
              key={element.id}
              id={element.id}
              img={element.img}
            ></Pokemon>
          );
        })}
    </div>
  );
}
