const request = require("supertest");
const app = require("../../src/app.js");
const { Pokemon } = require("../../src/db.js");
describe("POKEMONS API", () => {
  beforeEach(() => Pokemon.sync({ force: true }));

  it("GET /pokemons --> objects array, with name, types and id ", () => {
    return request(app)
      .get("/pokemons")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              types: expect.any(Array),
              id: expect.any(Number),
            }),
          ])
        );
      });
  });

  it("GET /pokemons --> array with length 40", () => {
    return request(app)
      .get("/pokemons")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(40);
      });
  });

  it("GET /pokemons?name='pokemon' -->  specific pokemon by name", () => {
    return request(app)
      .get("/pokemons?name=bulbasaur")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: "bulbasaur",
            types: expect.any(Array),
            id: expect.any(Number),
          })
        );
      });
  });

  it("GET /pokemons?name='pokemon' -->  specific pokemon by name", () => {
    return request(app)
      .get("/pokemons?name=mew")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: "mew",
            types: expect.any(Array),
            id: 151,
          })
        );
      });
  });
  it("GET /pokemons/:id --> specific pokemon by id", () => {});
  it("GET /pokemons/:id --> null if invalid ID", () => {
    return request(app)
      .get("/pokemons/900")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(null);
      });
  });
});

// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require("chai");
// const session = require("supertest-session");
// const app = require("../../src/app.js");
// const { Pokemon, conn } = require("../../src/db.js");

// const agent = session(app);
// const pokemon = {
//   name: "Pikachu",
// };

// describe("Pokemon routes", () => {
//   before(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );
//   beforeEach(() =>
//     Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
//   );
//   describe("GET /pokemons", () => {
//     it("should get 200", () => agent.get("/pokemons").expect(200));
//   });
// });
