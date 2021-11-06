const request = require("supertest");
const app = require("../../src/app.js");

describe("POKEMONS API", () => {
  it("GET /pokemons --> array 40 pokemons", () => {
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

  it("GET /pokemons?name='pokemon' -->  specific pokemon by name", () => {
    return request(app)
      .get("/pokemons?name=bulbasaur")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            types: expect.any(Array),
            id: expect.any(Number),
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
  it("POST /pokemons --> Create Pokemon on DB", () => {});
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
