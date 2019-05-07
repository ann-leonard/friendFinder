var path = require('path')
var express = require('express')


module.exports = function(app){
    app.use(express.static('./app/public'))
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get('/survey',function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get('/results', function(req,res){
        res.sendFile(path.join(__dirname, "../public/results.html"))
    })
}
