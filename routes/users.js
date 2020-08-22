const router = require("express").Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("This is user route");
});

module.exports = router;
