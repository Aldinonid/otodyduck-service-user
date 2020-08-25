const { User } = require("../../../models");

const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|trim|min:6",
    job: "string|optional",
    avatar: "string|optional",
  };

  const validate = v.validate(data, schema);
  if (validate.length) {
    return res.status(400).json({ status: "error", message: validate });
  }

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not Found" });
  }

  const isEmailExist = await User.findOne({
    where: { email: data.email },
  });
  if (isEmailExist) {
    return res
      .status(409)
      .json({ status: "error", message: "Email already exist" });
  }

  const password = await bcrypt.hash(data.password, 10);

  await user.update({
    ...data,
    password,
  });

  return res.json({
    status: "success",
    data: {
      id,
      name: user.name,
      email: user.email,
      job: user.job,
      avatar: user.avatar,
    },
  });
};
