/**
 * Created by www on 2016/1/21.
 */
var mongoose=require('mongoose');
var MovieSchema=require('../schemas/movie');
var Movie=mongoose.model('Movie',MovieSchema);

module.exports=Movie;
