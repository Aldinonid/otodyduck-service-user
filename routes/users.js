const router = require("express").Router();

const userHandler = require("./handler/users");

/* GET users listing. */
router.put("/:id", userHandler.update);

router.get("/:id", userHandler.getUser);
router.get("/", userHandler.getAllUsers);

router.post("/login", userHandler.login);

router.post("/logout", userHandler.logout);

router.post("/register", userHandler.register);

module.exports = router;
