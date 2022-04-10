const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: {type: String, lowercase: true},
  displayImage: {type: String},  
  location:{
      number: {type: String},
      street: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: String},
      country: {type: String}  
  }
});

module.exports = mongoose.model("Business", businessSchema);