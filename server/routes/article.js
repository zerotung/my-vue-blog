var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  return res.send({
    status: 1,
    info: 'OK',
  })
});

router.get('/list', function(req, res, next) {
  var range = req.query.range || '';
  fs.readFile('./public/datas/articles.json', function(err, data) {
    if (err) {
      return res.send({
        status: 0,
        info: '读取文件出现异常'
      })
    }
    var COUNT = 50;
    var obj = [];
    try {
      obj = JSON.parse(data.toString());
    } catch (e) {
      return res.send({
        status: 0,
        info: 'parse error'
      })
      obj = [];
    }
    if (obj.length > COUNT) {
      obj = obj.slice(0, COUNT);
    }
    return res.send({
      status: 1,
      data: obj
    })
  })
});

router.param('articleId', function(req, res, next, value) {
  req.articleId = value;
  next();
})

router.route('/show/:articleId')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function(req, res, next) {
    console.log('./public/datas/article/' + req.articleId + '.md');
    fs.readFile('./public/datas/article/' + req.articleId + '.md', function(err, data) {
      if (err) {
        return res.send({
          status: 0,
          info: '错误的文章ID'
        });
      }
      var obj = '';
      try {
        obj = data.toString();
      } catch (e) {
        return res.send({
          status: 0,
          info: 'parse error'
        })
      }
      return res.send({
        status: 1,
        info: obj
      });
    })
  })

module.exports = router;
