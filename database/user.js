const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 2: Define the User model here
const User = db.define("user", {
   name: {
type: DataTypes.STRING,
allowNull: false, 
},
  // You should define the following columns:
  // - name: string, required
});

module.exports = User;
