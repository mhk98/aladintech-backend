module.exports = (sequelize, DataTypes, Sequelize) => {
  const products = sequelize.define("products", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // unique: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    keyFeature: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("keyFeature"));
      },
      set: function (val) {
        return this.setDataValue("keyFeature", JSON.stringify(val));
      },
    },
  });

  return products;
};
