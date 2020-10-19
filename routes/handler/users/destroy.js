const { User, RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not Found",
    });
  } else {
    await RefreshToken.destroy({
      where: { user_id: userId },
    });

    await user.destroy();
  }

  return res.json({
    status: "success",
    message: "User has been Deleted",
  });
};
