const { request, response } = require("express");
const Email = require("../mongoose/model/Email");

/**
 * @param {request} req
 * @param {response} res
 */
exports.get = async (req, res) => {
  try {
    const emails = await Email.find({}).exec();
    res.status(200).json(emails);
  } catch (error) {
    res.status(400).send(error);
  }
};
