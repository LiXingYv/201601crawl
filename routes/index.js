var express = require('express');
var async = require('async');
var router = express.Router();
var db = require('../model');

/* GET home page. */
router.get('/', function (req, res, next) {
    //1.读取文章的列表和分类的列表
    async.parallel([
        function (cb) {
            db.category(cb);
        },
        function (cb) {
            db.article(cb);
        }
    ], function (err,result) {
        res.render('index', {
            categories:result[0],
            articles:result[1]
        });
    })

});

module.exports = router;
