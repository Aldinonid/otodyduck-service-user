module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
      role: {
        type: DataType.ENUM,
        values: ["teacher", "student"],
        allowNull: false,
        defaultValue: "student",
      },
      avatar: {
        type: DataType.STRING,
        allowNull: true,
      },
      job: {
        type: DataType.STRING,
        allowNull: true,
      },
      createdAt: {
        field: "created_at",
        type: DataType.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: DataType.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
