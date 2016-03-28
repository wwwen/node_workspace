/**
 * Created by www on 2016/3/13.
 */
var Artical=require('../models/artical');
var _=require('underscore');
var mongoose=require('mongoose');

//detail page


//admin update


//admin new
exports.new=function(req,res){
    var _artical=new Artical(
        {
            title:req.query.title,
            author:"www",
            content:req.query.content,
            status:req.query.status
        }
    );
    _artical.save(function(err,artical){
            if(err){
                console.log(err);
            }
           // res.redirect("/admin/artical/list");
        res.json({success:1});
    })

}

//add
exports.add=function(req,res){
    res.render("template_admin/artical/artical_edit",
        {
            artical:{
                title:"",
                label:"",
                content:"",
                author:"www"
            }
        });
}
//list
exports.list=function(req,res){
    Artical.fetch(function(err,articals){
            if(err){
                console.log(err);
            }
            res.render("template_admin/artical/articallist",
                {
                    title:"列表页",
                    articals:articals
                });
        }
    )
}



//delete
exports.delete=function(req,res){
    var id=new mongoose.Schema.ObjectId(req.query.id).path;
    if(id){
        Artical.delete(id,function(err,artical){
            if(err){
                console.log(err)
            }
            else{
                res.json({success:1})
            }
        })
    }
}

