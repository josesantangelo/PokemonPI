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

export function getPokemonsOriginal() {
  return async function (dispatch) {
    let pokemonsOriginal = await axios.get("http://localhost:3001/pokemons");
    try {
      dispatch({
        type: GET_POKEMONSORIGINAL,
        payload: pokemonsOriginal.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getPokemons(value) {
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
      dispatch(setSelectedPage(1));
      dispatch({
        type: SEARCH,
        payload: arr,
      });
    } catch (error) {
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
