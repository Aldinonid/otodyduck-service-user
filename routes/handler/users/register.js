const { User } = require("../../../models");

const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const data = req.body;

  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|trim|min:6",
    job: "string|optional",
  };

  const validate = v.validate(data, schema);
  if (validate.length) {
    return res.status(400).json({ status: "error", message: validate });
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

  const createUser = await User.create({
    ...data,
    password,
  });

  return res.json({
    status: "success",
    data: {
      id: createUser.id,
    },
  });
};
