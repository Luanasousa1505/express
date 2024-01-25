const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Bem vindo ");
});

app.get("/blog/:artigo?", function(req,res){


    var  artigo = req.params.artigo;
     
    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
    }else{
        res.send("<h3>Bem vindo oa blog </h3>");
    }
    
});

app.get("/canal", function(req,res){
    res.send("Bem vindo ao canal! ");
});


app.get("/ola/:nome", function(req,res){
    var nome = req.params.nome;

    res.send("<h1>oi " + nome + "</h1>");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servido Inciado com Sucesso ");
    }

})