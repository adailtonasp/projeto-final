const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email :{type: String, require: true},
  createdAt : {type: Date, default: Date.now},
  updatedAt : {type: Date, default: Date.now }

});

module.exports = mongoose.model("Usuario", usuarioSchema);
