
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    address_to: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.ENUM('completed', 'pending'),
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};