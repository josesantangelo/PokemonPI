import {
  GET_POKEMONS,
  GET_EXACTPOKEMON,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  FILTER_POKEMON,
  DETAILED_POKEMON,
} from "./action_types.js";
import axios from "axios";
import { bindActionCreators } from "redux";
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
    if (value === null) {
      dispatch({
        type: GET_EXACTPOKEMON,
        payload: value,
      });
    } else {
      try {
        let exactPokemons = await axios.get(
          `http://localhost:3001/pokemons?name=${value}`
        );
        console.log("llego!", exactPokemons.data);
        dispatch({
          type: GET_EXACTPOKEMON,
          payload: exactPokemons.data,
        });
      } catch (error) {
        console.log("error!");
        dispatch({
          type: GET_EXACTPOKEMON,
          payload: {
            name: "No existe",
            types: [{ name: " " }],
            id: "",
            img: "https://svgsilh.com/svg_v2/1574006.svg",
          },
        });
      }
    }
  };
}

export function filterPokemons(value) {
  console.log("value filter", value);
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
    }
  };
}
