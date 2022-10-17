const express = require("express");
const cors = require("cors");
const app = express();
const { createConnection } = require("./mongoose/connection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const productRoute = require("./routes/productRoute");
const emailRoute = require("./routes/emailRoute");

app.use("/product", productRoute);
app.use("/email", emailRoute);

app.listen(3000, () => {
  console.log(`Rodando API de produtos na porta 3000`);
  createConnection(); // cria a conexão com o MongoDB
});
