const { User } = require("../../../models");

const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const data = req.body;
  const schema = {
    email: "email|empty:false",
    password: "string|trim|min:6",
  };

  const validate = v.validate(data, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: data.email },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const isValidPassword = await bcrypt.compare(data.password, user.password);
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.json({
    status: "success",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profession: user.profession,
    },
  });
};
