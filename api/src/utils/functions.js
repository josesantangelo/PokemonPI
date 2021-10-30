const { Axios, default: axios } = require("../../../client/node_modules/axios");

const getPokemon = async (path, creator, tag = "") => {
  try {
    response = await axios.get(`${path}/${tag}`);
    data = await response.data;
    return new creator(data);
  } catch (error) {
    return null;
  }
};

// const getPokemons = (path, creator, tag = "") => {
//   try {
//     response = await axios.get(`${path}/${tag}`);
//     data = await response.data;
//     return new creator(data);
//   } catch (error) {
//     return null;
//   }
// };

module.exports = {
  getPokemon,
};
