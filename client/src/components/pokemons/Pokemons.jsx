import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, setPages } from "../../store/actions/actions";
import Pokemon from "../pokemon/Pokemon.jsx";
import s from "./pokemons.module.css";

export default function Pokemons() {
  let pokemons = useSelector((state) => state.pokemons);
  let exactPokemon = useSelector((state) => state.pokemon);
  // let pages = useSelector((state) => state.pages);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  let max = Math.ceil(pokemons.length / 12);
  //Adentro o afuera de useEffect funciona igual, pero afuera duplica los resultados
  useEffect(() => {
    dispatch(setPages(max));
  }, [pokemons]);

  // let onClick = (e) => {
  //   e.preventDefault();
  //   console.log(exactPokemon);
  //   dispatch(getExactPokemon());
  //   dispatch(getPokemons());
  //   console.log(exactPokemon);
  // };

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
