const { User } = require("../../../models");

const Op = require("sequelize").Op;
const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|trim|min:6|optional",
    job: "string|optional",
    avatar: "string|optional",
    role: { type: "enum", values: ["teacher", "student", "admin"] },
  };

  const validate = v.validate(data, schema);
  if (validate.length) {
    return res.status(400).json({ status: "error", message: validate });
  }

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not Found" });
  }

  //? Syntax manual query will be "SELECT * FROM users WHERE email = user.email AND id != user.id"
  const isEmailExist = await User.findOne({
    where: {
      [Op.and]: [
        {
          email: {
            [Op.eq]: user.email,
          },
        },
        {
          id: {
            [Op.ne]: user.id,
          },
        },
      ],
    },
  });

  if (isEmailExist) {
    return res
      .status(409)
      .json({ status: "error", message: "Email already exist" });
  }

  if (data.password) {
    const password = await bcrypt.hash(data.password, 10);

    await user.update(password);
  }
  await user.update(data);

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
