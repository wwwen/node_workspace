/**
 * Created by www on 2016/2/18.
 */
var User=require('../models/user');
var _=require('underscore');

exports.signup=function(req,res){
    var _user=req.body.user;
    //req.param("user")bady query params
    //console.log(_user);
    var user=new User(_user);
    user.save(function(err,user) {
        if(err){
            console.log(err);
        }
        //console.log(user);
        res.redirect("/user/list");
    });
}

exports.signin=function(req,res){
    var _user=req.body.user;
    var _name=_user.name;
    var _password=_user.password;
    User.findByName(_name,function(err,user){
        if(err){
            console.log(err)
        }
        if(!user){
            //res.json({message:0});
            console.log("该用户不存在")
            return
        }
        if(user.password==_password){
            //res.json({message:1});
            req.session.user=user;
            console.log(req.session.user);
            console.log("登陆成功");
            res.redirect("/")
        }else{
            // res.json({message:2});
            console.log("密码有误")
        }
    })
}

exports.logout=function(req,res){
    delete req.session.user;
    res.redirect("/");
}

exports.list=function(req,res){
    User.fetch(function(err,users){
            if(err){
                console.log(err)
            }
            res.render("template_admin/user/user",
                {
                    title:"列表页",
                    users:users
                })
        }
    )
}
exports.find=function(req,res){
    var _name=req.query.name;
    console.log("后台接到：："+_name);
    User.findByName(_name,function(err,user){
            if(err){
                console.log(err)
            }
            if(user){
                //console.log(user.name);
                res.json({message:user});
                // res.setAttribute("message",1);

            }else{
                // res.json({message:0});
                //res.setAttribute("message",1);
                res.redirect("/user/list");
            }
        }
    )
}