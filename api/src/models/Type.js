const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "type",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // primaryKey: true,
      },
      // id_api: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
