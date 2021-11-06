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

    for (let i = 1; i <= 4; i++) {
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

    let totalPokemonDB = await Pokemon.findAll({
      include: {
        model: Type,
      },
    });
    // totalPokemonDB = await totalPokemonDB
    //   .forEach((element) => (element = element.dataValues))
    //   .then(console.log(totalPokemonDB[0]));

    // let otroarr = await totalPokemonDB.forEach(async (pokemon) => {
    //   await pokemon.dataValues.types.forEach((type) => {
    //     let names = [];
    //     delete type.id_api;
    //     delete type.poke_type;
    //     names.push(type.name);
    //     pokemon.types = names;
    //   });
    //   return pokemon;
    // });
    // console.log("otroarr", otroarr);
    const totalPokemon = totalPokemonApi.concat(totalPokemonDB);
    res.send(totalPokemon);
  }
});

pokemons.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (id.length > 6) {
    try {
      const pokemonDB = await Pokemon.findByPk(id, {
        include: {
          model: Type,
        },
      });
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
  const {
    name,
    hp,
    attack,
    type1,
    type2,
    defense,
    speed,
    height,
    weight,
    img,
  } = req.body;
  try {
    const newPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    //LIMPIAR TYPES PARA QUE QUEDEN COMO LOS DE LA API
    newPoke.addType([type1, type2]);

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
