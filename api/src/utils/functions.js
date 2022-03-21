// const { Axios, default: axios } = require("../../../client/node_modules/axios");
const { Axios, default: axios } = require('axios')
const { Pokemon } = require("../db.js");

const getPokemon = async (path, creator, tag = "") => {
  try {
    response = await axios.get(`${path}/${tag}`);
    data = await response.data;
    return new creator(data);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getPokemon,
};
