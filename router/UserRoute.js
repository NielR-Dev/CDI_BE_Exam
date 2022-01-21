var express = require("express");
var userController = require("../controller/UserController");
var router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users/login", userController.login);
router.delete("/users/logout", userController.logout);
router.put("/users/register", userController.register);

module.exports = router;


// Create a simple ReST API using NodeJS+Express or any other libraries that you are familiar with.

// The ReST API should have the following routes:
// 1. POST /login - accepting username and password as payload then returning a token as the response.
// 2. DELETE /logout - this should invalidate the current user session.
// 3. POST /register - accepting fullname, username, password as payload, saving this data into the database with password hashed. Should return a message giving the status of the registration as a response.
// Additional: If remaining time permits, add validation to inputs and try to catch possible errors


