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
// create application/json parser
//var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: true });
//app.use(bodyParser.json());
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
//app.set("views","./app/views/pages");
//app.use(express.static("public"));
app.set("views","./app/views/template/templates");
app.use(express.static("./app/views/template/templates"));

app.set("view engine","jade");
app.set("port",3000);
app.listen(3000);
require('./config/routes')(app);
console.log("------------Server start------------");










