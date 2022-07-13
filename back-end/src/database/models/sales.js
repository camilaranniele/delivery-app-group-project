module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users, {
      foreignKey: 'userId', as: 'user',
    });
    sales.belongsTo(models.users, {
      foreignKey: 'sellerId', as: 'seller',
    });
  };

  return sales;
};
