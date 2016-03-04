/**
 * Created by www on 2016/2/18.
 */
var Movie=require('../app/controllers/movie');
var User=require('../app/controllers/user');
var Comment=require('../app/controllers/comment');
var Index=require('../app/controllers/index');
var Catetory=require('../app/controllers/catetory');
module.exports=function(app){
    //页面路由
//index
    app.get("/",Index.index);
    app.get("/admin",Movie.list);
//movie
    //detail
    app.get("/movie/:id",Movie.detail);
    //update
    app.get('/admin/update/:id',Movie.update);
    //new
    app.post('/admin/movie/new',Movie.new);
    //admin add
    app.get("/admin/movie",Movie.add);
    //list
    app.get("/admin/list",Movie.list);
    //delete
    app.delete("/admin/list",Movie.delete);
    //upload
    app.post("/uploadImg",Movie.upload);

//user
    //user sign up
    app.post("/user/signup",User.signup);
    //user list
    app.get("/user/list",User.list);

    app.post("/user/find",User.find);

    app.post("/user/signin",User.signin);

    app.get("/logout",User.logout);
//comment
    app.post("/user/comment",Comment.save);

//catetory
    app.get("/admin/catetory/new",Catetory.new);
    app.get('/admin/catetory/update/:id',Catetory.update);
    app.get("/admin/catetory/:id",Catetory.detail);
    app.post("/admin/catetory",Catetory.save);
    app.get("/admin/catetorylist",Catetory.list);
    app.delete("/admin/catetory/list",Catetory.delete);


}


