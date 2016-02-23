/**
 * Created by www on 2016/2/18.
 */
var mongoose=require('mongoose');
var CommentSchema=require('../schemas/comment');
var Comment=mongoose.model('Comment',CommentSchema);

module.exports=Comment;