/**
 * Created by www on 2016/3/13.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ArticalSchema=new Schema({
    title:String,
    label:String,
    author:String,
    content:String,
    status:String,//1已发表，0为草稿
    meta:{
        createAt:{
            type:Date,
            default: Date.now()
        },
        updateAt:{
            type:Date,
            default: Date.now()
        }
    }
});

ArticalSchema.pre('save',function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

ArticalSchema.statics={
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cb)
    },
    findById:function(id,cb){
        return this.findOne({_id:id}).exec(cb)
    },
    delete:function(id,cb){
        return this.remove({_id:id}).exec(cb)
    }
};
module.exports=ArticalSchema;
