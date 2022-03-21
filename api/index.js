const { Axios, default: axios } = require("axios");
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Type } = require("./src/db.js");

// const addTypes = async () => {
//   try {
//     const PokemonTypes = await axios.get("https://pokeapi.co/api/v2/type");
//     const dataPokemonTypes = PokemonTypes.data.results;
//     dataPokemonTypes.map((element) => {
//       Type.create({ name: element.name });
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

const addTypes = async () => {
  try {
    const PokemonTypes = axios.get("https://pokeapi.co/api/v2/type");

    let dataPokemonTypes = (await PokemonTypes).data.results;

    let urlTypes = dataPokemonTypes.map((element) => element.url);

    let TypesCollection = [];

    TypesCollection = urlTypes.map(async (element) => {
      let dataUrl = await axios.get(element);

      let idUrl = await dataUrl.data.id;
      let nameUrl = await dataUrl.data.name;

      Type.create({
        name: nameUrl,
        id_api: idUrl,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    addTypes();
    console.log(`%is listening at ${process.env.PORT ? process.env.PORT : "3001"}`); // eslint-disable-line no-console
  });
});
