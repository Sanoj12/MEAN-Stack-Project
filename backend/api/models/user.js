const mongoose= require('mongoose');


mongoose.connect('mongodb+srv://sanoj:RQknfprxCvUqTQ14@cluster0.2lby9ko.mongodb.net/user_db?retryWrites=true&w=majority',{useNewUrlParser: true});

var conn=mongoose.Collection;


var userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});


var userModel=mongoose.model('users' ,userSchema);

module.exports=userModel;