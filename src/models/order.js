const { Model } = require('sequelize');

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
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      address_to: DataTypes.STRING,
      total_order_price: DataTypes.DECIMAL,
      status: DataTypes.ENUM('completed', 'pending'),
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
