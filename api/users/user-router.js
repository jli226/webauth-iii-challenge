const express = require("express");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      let filteredUser = users.filter(
        user => req.user.username === user.username
      );
      let filterByDepartment = users.filter(
        user => user.department === filteredUser[0].department
      );
      res.json({ filterByDepartment, loggedinUser: req.user.username });
    })
    .catch(err => res.send(err));
});

module.exports = router;
