const mongoose = require("mongoose");

let connection;

exports.createConnection = async () => {
  try {
    connection = await mongoose.connect(
      "mongodb+srv://thiago:admin@cluter-produtos.dpsvaii.mongodb.net/checkpoint_ms?retryWrites=true&w=majority"
    );
    console.log(`Conectado com o MongoDB!`);
  } catch (error) {
    console.log(`Erro ao se conectar com o MongoDB:`, error);
  }
};

exports.getConnection = () => connection;
