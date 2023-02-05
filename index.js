var express = require('express');
var parser = require('body-parser');
var path = require('path');
var app = express();
var ejs = require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'gioco'));

app.get('/',function(req,res){
    res.render('home',{
        topicHead : 'WILD DICE',
       
    });
    console.log('user accessing Home page');
});

app.post('/d2',function(req,res){
    res.render('gioco2dadi',{
    topicHead : '',
       
    });
    console.log('user accessing gioco 2 dadi');
});

app.get('/d2',function(req,res){
    res.render('gioco2dadi',{
    topicHead : '',
       
    });
    console.log('user accessing gioco 2 dadi');
});

app.post('/d1',function(req,res){
    res.render('gioco1dadi',{
    topicHead : '',
       
    });
    console.log('user accessing gioco 1 dado');
});

app.get('/d1',function(req,res){
    res.render('gioco1dadi',{
    topicHead : '',
       
    });
    console.log('user accessing gioco 1 dado');
});

app.post('/istruzioni',function(req,res){
    res.render('istruzioni',{
    topicHead : '',
       
    });
    console.log('user accessing istruzioni');
});

app.get('/istruzioni',function(req,res){
    res.render('istruzioni',{
    topicHead : '',
       
    });
    console.log('user accessing istruzioni');
});

app.get('/haiV',function(req,res){
    res.render('vinto',{
    topicHead : '',
       
    });
    console.log('user accessing vinto');
});

app.get('/haiP',function(req,res){
    res.render('perso',{
    topicHead : '',
       
    });
    console.log('user accessing hai perso');
});

app.listen(8080,function(){
    console.log('server running on port 8080');
})
