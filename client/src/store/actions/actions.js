import {
  GET_POKEMONSORIGINAL,
  GET_POKEMONS,
  SEARCH,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  DETAILED_POKEMON,
  SET_ID,
  GET_POKEMONSORIGIN,
} from "./action_types.js";
import axios from "axios";

export function getPokemonsOriginal() {
  return async function (dispatch) {
    let pokemonsOriginal = await axios.get("/pokemons");
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

export function getPokemonsOrigin(value) {
  return function (dispatch) {
    dispatch({
      type: GET_POKEMONSORIGIN,
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
    let types = await axios.get("/types");
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
      console.log("value", value);
      let arr = [];
      let exactPokemons = await axios.get(
        `/pokemons?name=${value}`
      );
      console.log("data", exactPokemons.data);
      if (exactPokemons.data) {
        arr.push(exactPokemons.data);
        dispatch(setSelectedPage(1));
        dispatch({
          type: SEARCH,
          payload: arr,
        });
      } else {
        arr.push({
          name: "No existe",
          types: [{ name: " " }],
          id: "0",
          img: "https://svgsilh.com/svg_v2/1574006.svg",
        });
        dispatch(setSelectedPage(1));
        dispatch({
          type: SEARCH,
          payload: arr,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// dispatch({
//   data: [
//     {
//       type: SEARCH,
//       payload: {
//         name: "",
//         types: [{ name: " " }],
//         id: "",
//         img: "https://svgsilh.com/svg_v2/1574006.svg",
//       },
//     },
//   ],
// });

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
      let detailed = await axios.get(`/pokemons/${value}`);

      try {
        if (detailed.data) {
          console.log(detailed.data);
          dispatch({
            type: DETAILED_POKEMON,
            payload: detailed.data,
          });
        } else {
          dispatch({
            type: DETAILED_POKEMON,
            payload: {
              name: "No existe",
              types: [""],
              id: "0",
              img: "https://svgsilh.com/svg_v2/1574006.svg",
              hp: "0",
              attack: "0",
              defense: "0",
              speed: "0",
              height: "0",
              weight: "0",
            },
          });
        }
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

export function setId(value) {
  return function (dispatch) {
    dispatch({
      type: SET_ID,
      payload: value,
    });
  };
}
