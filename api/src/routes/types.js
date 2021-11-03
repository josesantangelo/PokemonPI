const { Axios, default: axios } = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");
const types = Router();

types.get("/", async (req, res, next) => {
  const totalTypes = await Type.findAll({
    attributes: {
      exclude: ["id", "id_api"],
    },
  });

  res.json(totalTypes);
});

// types.post("/", async (req, res, next) => {
//   const PokemonTypes = axios.get("https://pokeapi.co/api/v2/type");

//   let dataPokemonTypes = (await PokemonTypes).data.results;

//   let urlTypes = dataPokemonTypes.map((element) => element.url);

//   let TypesCollection = [];

//   TypesCollection = urlTypes.map(async (element) => {
//     let dataUrl = await axios.get(element);
//     // console.log(dataUrl.data.id);
//     let idUrl = await dataUrl.data.id;
//     let nameUrl = await dataUrl.data.name;
//     try {
//       Type.findOrCreate({
//         where: {
//           name: nameUrl,
//           id_api: idUrl,
//         },
//       });
//     } catch (error) {
//       next(error);
//     }
//   });
//   // console.log(TypesCollection);
//   res.send();
// });

types.put("/", (req, res, next) => {
  res.send("soy el put de /types");
});

types.delete("/", (req, res, next) => {
  res.send("soy el delete de /types");
});

module.exports = types;
