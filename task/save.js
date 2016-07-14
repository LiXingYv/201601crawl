var mysql = require('mysql');
var async = require('async');
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'crawl'
});
//把分类列表存入数据库
exports.category = function(list,callback){
    async.forEach(list,function(item,cb){
        pool.query('replace into category(id,name,url) values(?,?,?)',[item.id,item.name,item.url],cb);
    },callback);
}

//把文章列表存入数据库
exports.article = function(list,callback){
    async.forEach(list,function(item,cb){
        pool.query('replace into article(name,url,cid) values(?,?,?)',[item.name,item.url,item.cid],cb);
    },callback);
}

/*
exports.article([{
    name:'后羿射日',url:'surn',cid:100
}],function (err,result) {
    console.log(result);
})*/
