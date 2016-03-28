/**
 * Created by www on 2016/2/18.
 */
var Comment=require('../models/comment');
var _=require('underscore');

exports.save=function(req,res){
    var _comment=req.body.comment;
    var movieId=_comment.movie;
    if(_comment.cid){
        Comment.findById(_comment.cid,function(err,comment){
            var reply={
                from:_comment.from,
                to:_comment.tid,
                content:_comment.content
            };
            console.log(reply);
            //评论记录中追加回复
            comment.reply.push(reply);
            comment.save(function(err,comment){
                if(err){
                    console.log(err);
                }
                res.redirect("/movie/"+movieId);
            });
        });
    }
    else{
        var comment=new Comment(_comment);
        comment.save(function(err,comment){
            if(err){
                console.log(err);
            }
            res.redirect("/movie/"+movieId);
        })
    }

}