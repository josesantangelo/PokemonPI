//ORDER FUNCTIONS

export const alphabeticOrder = (arr, order, cb) => {
  //let ordenados = pokemons y trabajo sobre ordenados ???
  if (order === "a") {
    arr.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (order === "z") {
    arr.sort((a, b) => b.name.localeCompare(a.name));
  }
};

export function sorterOne(a, b) {
  if (a.id < b.id) {
    return -1;
  } else {
    return 1;
  }
}

export function sorterForty(a, b) {
  if (a.id < b.id) {
    return 1;
  } else {
    return -1;
  }
}

//__________________________________________________________________

//VALIDATION FUNCTIONS (FORM)

// export const validatePokemon = (arr, set, state, value) => {
//   if (arr.includes(value.toLowerCase())) {
//     set({
//       ...state,
//       name: `${value} ya existe! Probaste Super${value}?`,
//     });
//     console.log(state.name);
//   } else {
//     set({ ...state, name: "" });
//   }
//   set(value);
// };
