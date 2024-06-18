module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowrdNull: false,
      validate: {
        notEmpty: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowrdNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return User;
};
