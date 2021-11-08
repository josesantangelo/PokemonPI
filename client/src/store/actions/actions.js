import {
  GET_POKEMONSORIGINAL,
  GET_POKEMONS,
  SEARCH,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  DETAILED_POKEMON,
} from "./action_types.js";
import axios from "axios";

// import { search } from "../../components/search/Search.jsx";
export function getPokemonsOriginal() {
  return async function (dispatch) {
    let pokemonsOriginal = await axios.get(
      "http://localhost:3001/pokemons?page=1&limit=40"
    );
    try {
      dispatch({
        type: GET_POKEMONSORIGINAL,
        payload: pokemonsOriginal.data,
      });

      console.log("getPokemonsOriginal");
      // dispatch({
      //   type: GET_POKEMONS,
      //   payload: pokemonsOriginal.data,
      // });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getPokemons(value) {
  console.log("value", value);
  return function (dispatch) {
    dispatch({
      type: GET_POKEMONS,
      payload: value,
    });
  };
}
export function setPages(value) {
  return function (dispatch) {
    let arr = [];
    for (let i = 1; i <= value; i++) {
      arr.push(i);
    }
    dispatch({
      type: SET_PAGES,
      payload: arr,
    });
  };
}

export function getTypes() {
  return async function (dispatch) {
    // await axios.post("http://localhost:3001/types");
    let types = await axios.get("http://localhost:3001/types");
    try {
      dispatch({
        type: GET_TYPES,
        payload: types,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getExactPokemon(value) {
  return async function (dispatch) {
    try {
      let arr = [];
      let exactPokemons = await axios.get(
        `http://localhost:3001/pokemons?name=${value}`
      );
      arr.push(exactPokemons.data);
      console.log("llego!", exactPokemons.data);
      dispatch({
        type: SEARCH,
        payload: arr,
      });
      console.log("listo");
    } catch (error) {
      console.log("error!");
      dispatch({
        type: SEARCH,
        payload: [
          {
            name: "No existe",
            types: [{ name: " " }],
            id: "",
            img: "https://svgsilh.com/svg_v2/1574006.svg",
          },
        ],
      });
    }
  };
}

export function setSelectedPage(value) {
  return function (dispatch) {
    dispatch({
      type: SET_SELECTEDPAGE,
      payload: value,
    });
  };
}

export function detailedPokemon(value) {
  return async function (dispatch) {
    if (value === null) {
      dispatch({
        type: DETAILED_POKEMON,
        payload: value,
      });
    } else {
      let detailed = await axios.get(`http://localhost:3001/pokemons/${value}`);
      try {
        dispatch({
          type: DETAILED_POKEMON,
          payload: detailed.data,
        });
      } catch (error) {
        dispatch({
          type: SEARCH,
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
    }
  };
}
