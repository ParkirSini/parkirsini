'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Booking, { foreignKey: 'customerId' });
      Customer.hasMany(models.ParkingSpaceReview, { foreignKey: 'customerId' });
    }
  }
  Customer.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique:{
        args:true,
        msg: "Email must be unique"
      },
      validate: {
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Format must be Email"
        },
      }
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Username is required"
        },
        notEmpty: {
          msg: "Username is required"
        },
      }
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Phone Number is required"
        },
        notEmpty: {
          msg: "Phone Number is required"
        },
      }
    },
    address:  {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Address is required"
        },
        notEmpty: {
          msg: "Address is required"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};