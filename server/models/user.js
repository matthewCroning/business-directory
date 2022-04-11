const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {type: String,  unique: true,
  lowercase: true},
  password: {type: String},
  businesses: [{type: Schema.Types.ObjectId, ref: 'Business'}]  
});

userSchema.methods.isSamePassword = function(requestedPassword){
  return bcrypt.compareSync(requestedPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);

