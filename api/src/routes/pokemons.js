const { Router } = require("express");
const { Pokemon } = require("../db.js");
const { API } = require("../utils/constants.js");
const { PokemonDetail, PokemonItem } = require("../utils/classes.js");
const { getPokemon } = require("../utils/functions.js");
const pokemons = Router();

pokemons.get("/", async (req, res, next) => {
  const { name } = req.query;
  // let response;
  let data;
  let pokemon;

  if (name) {
    pokemon = await getPokemon(API, PokemonItem, name);
    if (!pokemon) {
      try {
        pokemon = await Pokemon.findOne({
          where: {
            name: name,
          },
        });
      } catch (error) {
        next(error);
      }
    }

    if (pokemon) {
      res.json(pokemon);
    } else {
      res.sendStatus(404);
    }
  } else {
    let totalPokemonApi = [];

    let counter = 0;
    const max = 2;
    let url = API;

    let urlArr = [];
    for (let i = 1; i <= max; i++) {
      urlArr = [...urlArr, `${url}/${i}`];
    }

    while (counter < max) {
      try {
        pokemon = await getPokemon(urlArr[counter], PokemonItem);
        totalPokemonApi = [...totalPokemonApi, pokemon];
        counter++;
      } catch (error) {
        next(error);
      }
    }

    const totalPokemonDB = await Pokemon.findAll();
    const totalPokemon = totalPokemonApi.concat(totalPokemonDB);
    res.send(totalPokemon);
  }
});

pokemons.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  //Agregar check para que < 898 y > 10002 y < 10220

  if (id.length > 6) {
    try {
      const pokemonDB = await Pokemon.findByPk(id);
      return res.json(pokemonDB);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      pokemon = await getPokemon(API, PokemonDetail, id);
      return res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
});

pokemons.post("/", async (req, res, next) => {
  const { name, hp, attack, type, defense, speed, height, weight } = req.body;

  try {
    const newPoke = await Pokemon.create({
      name,
      hp,
      type,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    res.json(newPoke);
  } catch (error) {
    next(error);
  }
});

pokemons.put("/", (req, res, next) => {
  res.send("soy el put de /pokemons");
});

pokemons.delete("/", (req, res, next) => {
  res.send("soy el delete de /pokemons");
});

module.exports = pokemons;
