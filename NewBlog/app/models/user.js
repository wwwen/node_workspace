/**
 * Created by www on 2016/1/23.
 */
var mongoose=require('mongoose');
var UserSchema=require('../schemas/user');
var User=mongoose.model('User',UserSchema);

module.exports=User;
