const { User } = require("../../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || [];

  const sqlOPtions = {
    attributes: ["id", "name", "email", "job", "avatar", "role"],
  };

  if (userIds.length) {
    sqlOPtions.where = {
      id: userIds,
    };
  }

  const users = await User.findAll(sqlOPtions);

  return res.json({
    status: "success",
    data: users,
  });
};
