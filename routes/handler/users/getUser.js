const { User } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ["id", "name", "email", "job", "avatar", "role", "password"],
  });
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not Found" });
  }

  return res.json({
    status: "success",
    data: user,
  });
};
