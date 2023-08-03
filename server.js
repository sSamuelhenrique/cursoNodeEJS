/* CRIA UM SERVIDOR QUE MOSTRA TUDO QUE A GENTE CONSTRUIU NO NAVEGADOR */
const express = require('express');
/* console.log(require('express')); */
/* INSTACIA DO express */
const app = express();
/* ESTAMOS FALANDO PARA O EXPRESS QUE NOSSA FERREMENTA DE VISUALIÇÃO DE HTML SERÁ EJS  */
app.set("view engine", "ejs");
/* ESTAMOS DEFININDO A ROTA DO NOSSO SITE (DOMINIO), QUANDO EU CHAMAR A ROTA PRINCIPAL "/" IRÁ EXECUTAR A FUNÇÃO (req, res)*/
app.get("/", function (req, res){
    /* res (RESPOSTA) O QUE FOI DADO DE RESPOSTA É A RENDERIZAÇÃO DO ARQUIVO INDEX */
    res.render("pages/index");
})
app.get("/about", function(req, res){
    res.render("pages/about")
})
/* app CARREGA TUDO DO EXPRESS, LISTEN É UMA FUNÇÃO QUE FICA DENTRO DO EXPRESS QUE FICA OUVINDO A PORTA 8080, QUANDO A PORTA 8080 FOR CHAMADA IRÁ 
EXECUTAR TUDO DENTRO    DO ARQUIVO server.js */
console.log("teste");
app.listen(8080);
/* GET & SET SÃO METODOS CONTIDOS DENTRO DO EXPRESS */