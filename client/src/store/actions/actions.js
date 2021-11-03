import {
  GET_POKEMONS,
  GET_EXACTPOKEMON,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  FILTER_POKEMON,
} from "./action_types.js";
import axios from "axios";
// import { search } from "../../components/search/Search.jsx";
export function getPokemons() {
  return async function (dispatch) {
    let pokemons = await axios.get(
      "http://localhost:3001/pokemons?page=1&limit=40"
    );
    try {
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.log(error);
    }
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
    if (!value) {
      dispatch({
        type: GET_EXACTPOKEMON,
        payload: value,
      });
    }
    try {
      let exactPokemons = await axios.get(
        `http://localhost:3001/pokemons?name=${value}`
      );

      dispatch({
        type: GET_EXACTPOKEMON,
        payload: exactPokemons,
      });
    } catch (error) {
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

export function filterPokemons(value) {
  return function (dispatch) {
    dispatch({
      type: FILTER_POKEMON,
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

export function setSelectedPage(value) {
  return function (dispatch) {
    dispatch({
      type: SET_SELECTEDPAGE,
      payload: value,
    });
  };
}
