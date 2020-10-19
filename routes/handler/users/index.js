const register = require("./register");
const login = require("./login");
const update = require("./update");
const logout = require("./logout");
const getUser = require("./getUser");
const getAllUsers = require("./getAllUsers");
const destroy = require("./destroy");

module.exports = {
  register,
  login,
  update,
  logout,
  getUser,
  getAllUsers,
  destroy,
};
