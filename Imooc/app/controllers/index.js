/**
 * Created by www on 2016/2/18.
 */
var Movie=require('../models/movie');
var Catetory=require('../models/catetory');
exports.index=function(req,res){
    //console.log("--------当前session用户-----------");
    //console.log(req.session.user);

    Catetory
        .find({})
        .populate({path:"movies",option:{limit:5}})
        .exec(function(err,catetories){
            var user=req.session.user;
            if(err){
                console.log(err)
            }
            res.render("../template/index",
                {
                    title:"imooc首页",
                    catetories:catetories,
                    user:user
                })

        })

}