var express = require('express'),
    http = require('http');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.writeHead('200', {
        'ConText-Type': 'text/html;charset=utf8'
    });

    res.write('<h1>express 서버에서 응답한 결과 입니다.</h1>');
    res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
    res.write('<div><p>Param Name : ' + paramName + '</p></div>');
});

app.use('/', function (req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함.');

    res.writeHead('200', {
        'Context-Type': 'text/html;charset=utf8'
    });
    res.end('<h1>Express 서버에서' + req.user + '응답한 결과입니다.</h1>');
});

http.createServer(app).listen(3000, function () {
    console.log('express서버가 3000번 포트에서 시작됨.');
});
