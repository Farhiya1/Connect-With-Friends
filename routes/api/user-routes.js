// Requiring express router
const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Takes you to /api/users <GET, POST>
router.route("/").get(getAllUsers).post(createUsers);
