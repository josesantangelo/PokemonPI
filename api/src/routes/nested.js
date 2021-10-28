// let currentPokemon;
// let currentPokemonDetail;

// let counterPageOne = 1;
// //stopper por las condiciones del paginado
// let firstPage = 40;
// //otro stopper para las condiciones de las paginas 2-n
// //encontrar la formula para funcionar con el paginado!!!!
// let pageTwoStart = 10;
// let pageTwoQty = 12;
// let pageTwoFinish = 22;

// //VOY A TRATAR DE TRAER LOS POKEMONS DE A 9 EN LA PRIMER PAGINA Y DE A 12 EN LA 2DA, PARA QUE CARGUE MAS RAPIDO
// //PRIMER PAGINA
// if (true) {
//   try {
//     while (counterPageOne <= firstPage) {
//       pokemonApi = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${counterPageOne}`
//       );
//       currentPokemon = pokemonGenerator(pokemonApi);
//       totalPokemonApi = [...totalPokemonApi, currentPokemon];
//       counterPageOne++;
//     }
//     counterPageOne = 0;
//     res.json(totalPokemonApi);
//   } catch (error) {
//     next(error);
//   }
// }
// //OTRAS PAGINAS
// if (true) {
//   try {
//     while (pageTwoStart < pageTwoFinish) {
//       pokemonApi = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${pageTwoStart}`
//       );
//       currentPokemon = pokemonGenerator(pokemonApi);
//       totalPokemonApi = [...totalPokemonApi, currentPokemon];
//       pageTwoStart++;
//     }
//     pageTwoStart = 0;
//     res.json(totalPokemonApi);
//   } catch (error) {
//     next(error);
//   }
// }
