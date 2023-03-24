 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sanojcsam:mkapNCHT1DGPIUJz@cluster0.quagwnc.mongodb.net/user_db?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;
 
var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,
 
});
 
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;