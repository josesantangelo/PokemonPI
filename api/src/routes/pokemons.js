const { Router } = require("express");
const { Axios, default: axios } = require("../../../client/node_modules/axios");
const { Pokemon, Type } = require("../db.js");
const { API } = require("../utils/constants.js");
const { PokemonDetail, PokemonItem } = require("../utils/classes.js");
const { getPokemon } = require("../utils/functions.js");
const pokemons = Router();

pokemons.get("/", async (req, res, next) => {
  const { name } = req.query;

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

    let urlArr = [];

    for (let i = 1; i <= 40; i++) {
      urlArr = [...urlArr, axios.get(`${API}/${i}`)];
    }

    await axios.all(urlArr).then(
      axios.spread((...responses) => {
        responses.forEach((res) => {
          pokemon = new PokemonDetail(res.data);
          totalPokemonApi = [...totalPokemonApi, pokemon];
        });
      })
    );

    const totalPokemonDB = await Pokemon.findAll({
      include: {
        model: Type,
      },
    });

    for (let i = 0; i < totalPokemonDB.length; i++) {
      totalPokemonDB[i].types.map((type) => {
        delete type.id;
        delete type.poke_type;
      });
    }
    const totalPokemon = totalPokemonApi.concat(totalPokemonDB);

    res.send(totalPokemon);
  }
});

pokemons.get("/:id", async (req, res, next) => {
  const { id } = req.params;

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
  const { name, hp, attack, types, defense, speed, height, weight } = req.body;

  try {
    const newPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    //LIMPIAR TYPES PARA QUE QUEDEN COMO LOS DE LA API
    newPoke.addType(types);

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
