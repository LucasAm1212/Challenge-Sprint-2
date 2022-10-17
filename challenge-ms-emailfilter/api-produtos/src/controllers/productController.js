const { request, response } = require("express");
const Product = require("../mongoose/model/Product");

/**
 * @param {request} req
 * @param {response} res
 */
exports.get = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * @param {request} req
 * @param {response} res
 */
exports.post = async (req, res) => {
  try {
    req.body.sku = Math.round(Math.random() * 8999 + 1000);
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * @param {request} req
 * @param {response} res
 */
exports.put = async (req, res) => {
  try {
    const { sku } = req.params;
    const product = await Product.findOneAndUpdate({ sku }, req.body, {
      new: true,
    });

    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "Produto não encontrado!" });
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * @param {request} req
 * @param {response} res
 */
exports.delete = async (req, res) => {
  try {
    const { sku } = req.params;
    const product = await Product.findOneAndDelete({ sku });

    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "Produto não encontrado!" });
  } catch (error) {
    res.status(400).send(error);
  }
};
