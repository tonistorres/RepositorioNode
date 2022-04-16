'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Produto = sequelize.define('Produto',{
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return Produto;

  class Product extends Model {
      static associate(models) {
      }
  }

  Product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};