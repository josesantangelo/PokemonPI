import {
  GET_POKEMONSORIGINAL,
  GET_POKEMONS,
  SEARCH,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  DETAILED_POKEMON,
} from "../actions/action_types.js";

const initialState = {
  pokemonsOriginal: [], //primera llamada no se toca mas
  pokemons: [], //copia, dependiendo de los filtrados ordenamientos
  types: [],
  // pokemon: null,
  detailedPokemon: null,
  pages: [],
  selectedPage: 1,
};

export default function reducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case GET_POKEMONSORIGINAL:
      return {
        ...state,
        pokemonsOriginal: action.payload,
      };

    case GET_POKEMONS: {
      console.log("payload", action.payload);
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload.data,
      };
    case SEARCH:
      console.log("reducer", action.payload);
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case SET_SELECTEDPAGE:
      return {
        ...state,
        selectedPage: action.payload,
      };

    case DETAILED_POKEMON: {
      return {
        ...state,
        detailedPokemon: action.payload,
      };
    }

    default:
      return state;
  }
}
