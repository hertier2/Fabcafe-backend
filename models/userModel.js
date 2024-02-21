 
const mongose = require('mongoose');

 const userSchema = mongose.Schema({
        fname: {
            type: String,
            required: true
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type: String,
            required: true

        },
        phone:{
            type:Number,
            required: true
        },
        password:{
            type: String,
            required:true
        }
 });

 module.exports = mongose.model('User',userSchema);