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
} from "../actions/action_types.js";

const initialState = {
  pokemonsOriginal: [], //primera llamada no se toca mas
  pokemons: [], //copia, dependiendo de los filtrados ordenamientos
  pokemonsByOrigin: [], //tercer estado para poder realizar filtrados combinados tipo/origen
  types: [],
  id: null,
  detailedPokemon: null,
  pages: [],
  selectedPage: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONSORIGINAL:
      return {
        ...state,
        pokemonsOriginal: action.payload,
      };

    case GET_POKEMONS: {
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
      console.log(action.payload);
      return {
        ...state,
        detailedPokemon: action.payload,
      };
    }
    case SET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case GET_POKEMONSORIGIN: {
      return {
        ...state,
        pokemonsByOrigin: action.payload,
      };
    }

    default:
      return state;
  }
}
