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
  // let flag = false;
  // console.log("flag:" + flag);
  // let setFlag = () => {
  //   return (flag = true);
  // };
  useEffect(() => {
    dispatch(getPokemons());
    // setFlag();
    // console.log("flag:" + flag);
  }, []);

  if (pokemons.length) {
    console.log(pokemons);
  }
  ///////////////////////////////////////////////////////////////////
  //PROTO FILTRADO POR TIPO
  // if (pokemons.length) {
  //   let filtrados = [];
  //   const findByType = (type1, type2) => {
  //     if (!type2) {
  //       let filtered = pokemons.filter((element) =>
  //         element.types.includes(type1)
  //       );
  //       filtrados = [...filtrados, filtered];
  //     }

  //     // || >> mas abarcativo     && >> mas especifico
  //     let filtered = pokemons.filter(
  //       (element) =>
  //         element.types.includes(type1) || element.types.includes(type2)
  //     );
  //     filtrados = [...filtrados, filtered];
  //   };
  //   findByType("fire", "water");
  //   console.log(filtrados);
  // }
  ///////////////////////////////////////////////////////////////////////
  //PROTO ORDENAMIENTO POR NOMBRE
  // if (pokemons.length) {
  //   const alphabeticOrder = (order) => {
  //     //let ordenados = pokemons y trabajo sobre ordenados ???
  //     if (order === "a") {
  //       pokemons.sort((a, b) => a.name.localeCompare(b.name));
  //     }
  //     if (order === "z") {
  //       pokemons.sort((a, b) => b.name.localeCompare(a.name));
  //     }
  //     return pokemons;
  //   };
  //   alphabeticOrder("a");
  //   console.log(pokemons);
  // }

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
