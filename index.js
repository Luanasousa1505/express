const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Bem vindo ")
});

app.get("/blog", function(req,res){
    res.send("Bem vindo oa blog ")
});

app.get("/canal", function(req,res){
    res.send("Bem vindo ao canal ")
});


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servido Inciado com Sucesso ");
    }

})