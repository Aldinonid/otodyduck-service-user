module.exports = (sequelize, DataType) => {
  const RefreshTokens = sequelize.define(
    "RefreshToken",
    {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      token: {
        type: DataType.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataType.DATE,
        allowNull: true,
      },
      updatedAt: {
        field: "updated_at",
        type: DataType.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "refresh_tokens",
      timestamps: true,
    }
  );

  return RefreshTokens;
};
