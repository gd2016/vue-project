var express=require('express');
var app=express();
var swig=require('swig')
app.use(require('connect-history-api-fallback')())
app.use(express.static('dist'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
//必须最后开启路由
var api=require('./api')
app.use(api);

//监听http请求
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
