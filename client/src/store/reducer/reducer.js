import {
  GET_POKEMONS,
  GET_EXACTPOKEMON,
  GET_TYPES,
  SET_PAGES,
  SET_SELECTEDPAGE,
  FILTER_POKEMON,
  DETAILED_POKEMON,
} from "../actions/action_types.js";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  pokemon: null,
  detailedPokemon: null,
  pages: [],
  selectedPage: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload.data,
      };
    case GET_EXACTPOKEMON:
      return {
        ...state,
        pokemon: action.payload.data,
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
    case FILTER_POKEMON: {
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    }
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
