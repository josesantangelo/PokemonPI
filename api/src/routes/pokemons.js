const { Router } = require("express");
const { Axios, default: axios } = require("../../../client/node_modules/axios");
const { Pokemon, Type } = require("../db.js");
const { API } = require("../utils/constants.js");
const { PokemonDetail, PokemonItem } = require("../utils/classes.js");
const { getPokemon } = require("../utils/functions.js");
const pokemons = Router();

pokemons.get("/", async (req, res, next) => {
  const { name } = req.query;
  // const page = parseInt(req.query.page);
  // const limit = parseInt(req.query.limit);

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
    // let url = API;
    let urlArr = [];
    // let finishIndex = page * limit;
    // let startIndex = finishIndex - limit + 1;
    //saque limite && < 40
    for (let i = 1; i <= 40; i++) {
      // if (i === 0 || (i > 898 && i < 10002) || i > 10220) continue;
      urlArr = [...urlArr, axios.get(`${API}/${i}`)];
    }

    await axios.all(urlArr).then(
      axios.spread((...responses) => {
        responses.forEach((res) => {
          // console.log(res.data.name);
          pokemon = new PokemonDetail(res.data);
          totalPokemonApi = [...totalPokemonApi, pokemon];
        });
      })
    );
    // if (type1 && type2) {
    //   console.log()
    //   totalPokemonApi = totalPokemonApi.filter((element) =>
    //     element.types.includes(type1 || type2)
    //   );
    // }
    // if (type1) {
    //   totalPokemonApi = totalPokemonApi.filter((element) =>
    //     element.types.includes(type1)
    //   );
    // }
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
    // if (page < 40) {
    res.send(totalPokemon);
    // }
    // if (totalPokemonDB.length < 8 && page > 4) {
    //   res.send([])
    // }
    // if (page > 4) {
    //   res.send(totalPokemonDB.slice(8 + 12 * (page - 5)));
    // }
    // res.send(totalPokemon.slice(0, 12));
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

    //YA LINKEA LOS POKEMONS CON LOS TIPOS. FALTA INCLUIR LOS TIPOS EN EL NUEVO POKEMON (QUEDAN NULL)
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
