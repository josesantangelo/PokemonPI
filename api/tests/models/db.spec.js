const request = require("supertest");
const app = require("../../src/app.js");
const { Pokemon } = require("../../src/db.js");

describe("POKEMONS API", () => {
  beforeEach(() => Pokemon.sync({ force: true }));
  it("POST /pokemons --> Create Pokemon on DB", () => {
    return request(app)
      .post("/pokemons")
      .send({
        name: "test1",
        img: "https://w7.pngwing.com/pngs/129/440/png-transparent-dbz-son-goku-goku-gohan-blu-ray-disc-dvd-dragon-ball-dragon-ball-z-orange-fictional-character-cartoon.png",
        type1: "4",
        type2: "14",
        hp: 20,
        attack: 50,
        defense: 30,
        speed: 10,
        height: 30,
        weight: 90,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: "test1",
            attack: expect.any(Number),
          })
        );
      });
  });

  it("POST /pokemons --> Refuses creation if missing values", () => {
    return request(app)
      .post("/pokemons")
      .send({
        img: "https://w7.pngwing.com/pngs/129/440/png-transparent-dbz-son-goku-goku-gohan-blu-ray-disc-dvd-dragon-ball-dragon-ball-z-orange-fictional-character-cartoon.png",
        type1: "4",
        type2: "14",
        hp: 20,
        attack: 50,
        defense: 30,
        speed: 10,
        height: 30,
        weight: 90,
      })
      .expect(500);
  });
});

// const { Pokemon, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Pokemon model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Pokemon.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Pokemon.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Pokemon.create({ name: 'Pikachu' });
//       });
//     });
//   });
// });
