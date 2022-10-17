const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  emailFrom: String,
  emailTo: String,
  subject: String,
  text: String,
  sendDateEmail: String,
  statusEmail: String,
});

module.exports = mongoose.model("sent_emails", schema);
