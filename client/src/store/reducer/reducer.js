import {
  GET_POKEMONS,
  GET_EXACTPOKEMON,
  GET_TYPES,
  SET_PAGES,
} from "../actions/action_types.js";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  pokemon: null,
  pages: [],
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

    default:
      return state;
  }
}
