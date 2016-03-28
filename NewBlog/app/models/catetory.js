/**
 * Created by www on 2016/2/21.
 */
var mongoose=require('mongoose');
var CatetorySchema=require('../schemas/catetory');
var Catetory=mongoose.model('Catetory',CatetorySchema);

module.exports=Catetory;
