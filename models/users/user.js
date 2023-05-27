const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const usertbls = sequelize.define(
    "usertbls",
    {
      Mobile_No: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
      pass_word: {
        type: DataTypes.STRING,
        allowNull: true,
        required: [true, "Password is required"],
      },

      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
        enum: ["user", "admin"],
      },
    },

    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.pass_word) {
            const salt = await bcrypt.genSaltSync(10);
            user.pass_word = bcrypt.hashSync(user.pass_word, salt);
          }
        },
      },
    }
  );
  usertbls.prototype.validPassword = async (pass_word, hash) => {
    return await bcrypt.compareSync(pass_word, hash);
  };
  usertbls.prototype.getHashPass = async (pass_word) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(pass_word, salt);
    return hashed;
  };
  return usertbls;
};
