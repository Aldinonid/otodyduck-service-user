const router = require("express").Router();

const refreshTokenHandler = require("./handler/refresh-tokens");

/* GET users listing. */
router.post("/", refreshTokenHandler.create);
router.get("/", refreshTokenHandler.getToken);

module.exports = router;
