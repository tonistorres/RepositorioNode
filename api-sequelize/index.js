// importando do meu ORM 02(dois) objetos DataTypes e o Sequelize
const { Sequelize, DataTypes } = require("sequelize");

// vou criar um novo objeto do tipo Sequelize

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "8Hyy+-XqcH8$c#-",
  database: "orm_example",
  dialect: "mysql",
});

// criando um módel da minha tabela product que está no banco de dados
// orm_example

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: "products",
    timestamps: false, // o sequelize por padrão cria duas colunas que com esse comanod estamos ignorando
  }
);

// Product.create({
//   name: "Agua Sanitaria 1000ml",
//   description: "Produto de Limpeza",
//   price: 9.98,
// });

async function buscarTodos(){
const products = await Product.findAll();
// console.log(products);
console.log(products.map((p)=> p.dataValues));


}

buscarTodos();