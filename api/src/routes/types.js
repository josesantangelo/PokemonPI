const { Axios, default: axios } = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");
const types = Router();

types.get("/", async (req, res, next) => {
  const totalTypes = await Type.findAll({
    // attributes: {
    //   exclude: ["id", "id_api"],
    // },
  });

  res.json(totalTypes);
});

module.exports = types;
