/**
 * Created by www on 2016/1/12.
 */
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var cookieParser=require("cookie-parser");
app.use(cookieParser());
var session=require("express-session");
var mongoStore=require("connect-mongostore")(session);
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());
app.use(session({
    resave:false,//添加这行
    saveUninitialized: true,//添加这行
    secret:"imooc",
   /* store:new mongoStore({
        'db': 'imooc',
        "collection" : "sessions",
        "host" : "localhost",
        "port" : 27017,
    })*/
})
);
var engines=require("consolidate");
app.engine("jade",engines.jade);
app.engine("html",engines.ejs);
app.set("view engine","jade");
//app.set("view engine","html");


//app.set("views","./app/views/pages");
app.use(express.static("public"));
app.set("views","./app/views/templates");
//app.use(express.static("./app/views/templates"));
//app.set("views","./app/views/template/template_admin");
//app.use(express.static("./app/views/template/template_admin"));

app.set("port",3000);
app.listen(3000);
require('./config/routes')(app);
console.log("------------Server start------------");










