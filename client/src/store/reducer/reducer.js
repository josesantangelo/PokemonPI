import { GET_POKEMONS, GET_EXACTPOKEMON } from "../actions/action_types.js";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  pokemon: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data,
      };
    case GET_EXACTPOKEMON:
      return {
        ...state,
        pokemon: action.payload.data,
      };
    default:
      return state;
  }
}
