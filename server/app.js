var express=require('express');
var app=express();
var api=require('./api')
app.use(api);
app.get('/index', function (req, res) {
  res.sendFile("/dist/index.html");
});

//监听http请求
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});