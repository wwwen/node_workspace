/**
 * Created by www on 2016/2/21.
 */
var Movie=require('../models/movie');
var Catetory=require('../models/catetory');
var Comment=require('../models/comment');
var _=require('underscore');
var mongoose=require('mongoose');

//detail page

exports.detail=function(req,res){
    var id=new mongoose.Schema.ObjectId(req.params.id).path;
    Catetory.findById(id,function(err,catetory){
        if(err){
            console.log(err);
        }
        var user=req.session.user;
        /*Comment
            .find({movie:id})
            .populate("from","name")
            .populate("reply.from reply.to","name")
            .exec(function(err,comments){
                console.log(comments);*/
                res.render("catetory_admin",
                    {
                        title:"详情页",
                        catetory:catetory
                        //user:user,
                        //comments:comments
                    });
          /*  })*/
    })

}

//admin update
exports.update=function(req,res){
    if(req.params.id){
        var id=new mongoose.Schema.ObjectId(req.params.id).path;
        Catetory.findById(id,function(err,catetory){
            res.render('catetory_admin',{
                title:'后台更新页',
                catetory:catetory
            });
        })
    }
}


//admin new
exports.new=function(req,res){
    res.render("catetory_admin",
        {
            title:"添加页",
            catetory:{
                name:""
            }
        })
}


exports.save=function(req,res){
    var catetoryObj=req.body.catetory;//页面上的movie
    var _catetory;
    if(req.body.catetory._id!=='undefined'){
        console.log("------------update--------------");
        var id=new mongoose.Schema.ObjectId(req.body.catetory._id).path;
        Catetory.findById(id,function(err,catetory){
            if(err){
                console.log(err);
            }
            _catetory= _.extend(catetory,catetoryObj);
            _catetory.save(function(err,catetory){
                if(err){
                    console.log(err);
                }
                res.redirect("/admin/catetorylist");
                // res.redirect("/movie/detail")
            })
        })
    }else{
        console.log("--------------save--------------");
        _catetory=new Catetory({
            name:catetoryObj.name
        })
        _catetory.save(function(err,catetory){
            if(err){
                console.log(err);
            }
            res.redirect('/admin/catetorylist');
            //res.redirect('/movie/1');
        })
    }

}


//list
exports.list=function(req,res){
    Catetory.fetch(function(err,catetories){
            if(err){
                console.log(err)
            }
            res.render("catetorylist",
                {
                    title:"列表页",
                    catetories:catetories
                })
        }
    )
}

//delete
exports.delete=function(req,res){
    var id=new mongoose.Schema.ObjectId(req.query.id).path;
    if(id){
        Catetory.delete(id,function(err,catetory){
            if(err){
                console.log(err)
            }
            else{
                res.json({success:1})
            }
        })
    }
}


