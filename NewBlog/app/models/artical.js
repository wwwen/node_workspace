/**
 * Created by www on 2016/3/13.
 */
var mongoose=require('mongoose');
var ArticalSchema=require('../schemas/artical');
var Artical=mongoose.model('Artical',ArticalSchema);

module.exports=Artical;
