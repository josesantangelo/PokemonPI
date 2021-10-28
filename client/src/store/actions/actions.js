import { GET_POKEMONS, GET_EXACTPOKEMON } from "./action_types.js";
import axios from "axios";
// import { search } from "../../components/search/Search.jsx";
export function getPokemons() {
  return async function (dispatch) {
    let pokemons = await axios.get("http://localhost:3001/pokemons/");
    try {
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      //se puede despachar un error, averiguar
      console.log(error);
    }
  };
}

export function getExactPokemon(value) {
  return async function (dispatch) {
    try {
      let exactPokemons = await axios.get(
        `http://localhost:3001/pokemons?name=${value}`
      );

      console.log(exactPokemons);
      dispatch({
        type: GET_EXACTPOKEMON,
        payload: exactPokemons,
      });
    } catch (error) {
      console.log("error del front!");
      dispatch({
        type: GET_EXACTPOKEMON,
        payload: {
          data: {
            name: "No existe",
            types: [],
            id: "",
            img: "https://svgsilh.com/svg_v2/1574006.svg",
          },
        },
      });
    }
  };
}
