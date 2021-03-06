const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  updateUsers,
  deleteUser
} = require("./user.controller");
// console.log("hello")


router.post("/signup", createUser);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
