const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "kevin",
      password: bcrypt.hashSync("test", 14),
      department: "sales"
    },
    {
      id: 2,
      username: "test",
      password: bcrypt.hashSync("test", 14),
      department: "finance"
    },
    {
      id: 3,
      username: "tester",
      password: bcrypt.hashSync("test", 14),
      department: "sales"
    },
    {
      id: 4,
      username: "dog",
      password: bcrypt.hashSync("test", 14),
      department: "hr"
    },
    {
      id: 5,
      username: "cat",
      password: bcrypt.hashSync("test", 14),
      department: "sales"
    }
  ]);
};
