/**
 * Created by www on 2016/2/18.
 */
var Movie=require('../models/movie');
var Comment=require('../models/comment');
var Catetory=require('../models/catetory');
var _=require('underscore');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/imooc');
//detail page
exports.detail=function(req,res){
    var id=new mongoose.Schema.ObjectId(req.params.id).path;
    Movie.findById(id,function(err,movie){
        if(err){
            console.log(err);
        }
        var user=req.session.user;
        Comment
            .find({movie:id})
            .populate("from","name")
            .populate("reply.from reply.to","name")
            .exec(function(err,comments){
                //console.log(comments);
                    res.render("detail",
                    {
                        title:"详情页",
                        movie:movie,
                        user:user,
                        comments:comments
                    })
        });
    })
}

//admin update
exports.update=function(req,res){
    if(req.query.id){
        var id=new mongoose.Schema.ObjectId(req.query.id).path;
        Movie.findById(id,function(err,movie){
            Catetory.fetch(function(err,catetories){
                if(req.query.type && req.query.type==1){
                    res.render('template_admin/movie/movieForm',{
                        title:'后台更新页',
                        movie:movie,
                        catetories:catetories
                    });
                }
                else{
                    res.render('template_admin/admin',{
                        title:'后台更新页',
                        movie:movie,
                        catetories:catetories
                    });
                }

            })
        })
    }
}

//admin new
exports.new=function(req,res){
    var movieObj=req.body.movie;//页面上的movie
    var _movie;
    if(req.body.movie._id!=='undefined'){
        console.log("------------update--------------");
        var id=new mongoose.Schema.ObjectId(req.body.movie._id).path;
        Movie.findById(id,function(err,movie){
            if(err){
                console.log(err);
            }
            _movie= _.extend(movie,movieObj);
            _movie.save(function(err,movie){
                if(err){
                    console.log(err);
                }
                //res.redirect("/movie/"+movie._id);
                res.redirect("/admin");
            })
        })
    }else{
        console.log("--------------save--------------");
        _movie=new Movie({
            doctor:movieObj.doctor,
            title:movieObj.title,
            catetory:movieObj.catetory,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash
        })
        _movie.save(function(err,movie){
            if(err){
                console.log(err);
            }

            var catetoryId=_movie.catetory;
            Catetory.findById(catetoryId,function(err,catetory){
                catetory.movies.push(movie._id)
                catetory.save(function(err,catetory){
                   // res.redirect('/movie/'+movie._id);
                    res.redirect("/admin");
                })
            })

            //res.redirect('/movie/1');
        })
    }

}

//add
exports.add=function(req,res){
    Catetory.fetch(function(err,catetories){
        res.render("template_admin/movie/movieForm",
            {
                title:"后台页面",
                movie:{
                    title:'',
                    doctor:'',
                    country:'',
                    catetory:'',
                    year:'',
                    poster:'',
                    flash:'',
                    summary:'',
                    language:''
                },
                catetories:catetories

            })
    })

}
//list
exports.list=function(req,res){
    Movie.fetch(function(err,movies){
            if(err){
                console.log(err)
            }
            res.render("index",
                {
                    title:"列表页",
                    movies:movies
                })
        }
    )
}

exports.listadmin=function(req,res){
    Movie.fetch(function(err,movies){
            if(err){
                console.log(err)
            }
            res.render("template_admin/movie/movieList",
                {
                    title:"列表页",
                    movies:movies
                })
        }
    )
}

//delete
exports.delete=function(req,res){
    var id=new mongoose.Schema.ObjectId(req.query.id).path;
    if(id){
        Movie.delete(id,function(err,movie){
            if(err){
                console.log(err)
            }
            else{
                res.json({success:1})
            }
        })
    }
}

//upload
exports.upload=function(req, res){
    var fs = require("fs");
    var formidable = require("formidable");
    var form = new formidable.IncomingForm();
    form.uploadDir = "./public/pictures/temp";//改变临时目录
    form.parse(req, function(error, fields, files){
        for(var key in files){
            var file = files[key];
            //var fName = (new Date()).getTime();
            var fName =file.name;
            /* switch (file.type){
             case "image/jpeg":
             fName = fName + ".jpg";
             break;
             case "image/png":
             fName = fName + ".png";
             break;
             default :
             fName =fName + ".png";
             break;
             }*/
            //console.log(file.size);
            console.log(fName);
            var uploadDir = "./public/pictures/" + fName;
            fs.rename(file.path, uploadDir, function(err) {
                if (err) {
                    console.log(err)
                }
            });
            res.json({name: fName});
        }
    });
}
