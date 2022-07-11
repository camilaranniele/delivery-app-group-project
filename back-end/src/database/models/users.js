module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
      foreignKey: 'userId', as: 'user',
    });
    Users.hasMany(models.Sales, {
      foreignKey: 'sellerId', as: 'seller',
    });
  };

  return Users;
};
