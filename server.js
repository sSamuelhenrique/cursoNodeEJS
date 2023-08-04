/* CRIA UM SERVIDOR QUE MOSTRA TUDO QUE A GENTE CONSTRUIU NO NAVEGADOR */
const express = require('express');
/* console.log(require('express')); */
/* INSTACIA DO express */
const app = express();
/* ESTAMOS FALANDO PARA O EXPRESS QUE NOSSA FERREMENTA DE VISUALIÇÃO DE HTML SERÁ EJS  */
app.set("view engine", "ejs");

/* ARRAY DE ITEMS GLOBAL, ESSE ITEMS SÃO OBJETOS */
const itemsGlobal = [
    {
        title: "E",
        message: "ficiência, pois permite a incorporação da lógica JavaScript diretamente nas visualizações de um aplicativo web."
    }, 
    {
        title: "J",
        message: "oining. O EJS permite a junção hormoniosa de código JavaScript e HTML em um único arquivo."
    },
    {
        title: "S",
        message: "implicidade. EJS é elogiado por sua abordagem simples e direta para a incorporação de lógica JavaScript nas visualizações"
    }
];

const subtitle = "Uma linguagem de modelagem para criação de página HTML"

/* ESTAMOS DEFININDO A ROTA DO NOSSO SITE (DOMINIO), QUANDO EU CHAMAR A ROTA PRINCIPAL "/" IRÁ EXECUTAR A FUNÇÃO (req, res)*/
app.get("/", function (req, res){
    /* ITEMS RECEBE O VALOR DO ARRAY */
   const items = itemsGlobal;
  
    /* res (RESPOSTA) O QUE FOI DADO DE RESPOSTA É A RENDERIZAÇÃO DO ARQUIVO INDEX */
    res.render("pages/index", {
        /* qualitys RECEBE O VALOR DE items E PASSA SER POSSIVEL RENDERIZAR ESSE VALOR NO ARQUIVO INDEX (PODE FAZER DIRETO IGUAL AO subtitle
            ONDE subtitle RECEBE O VALOR DE SUBTITLE QUE ESTÁ DECLARADO GLOBALMENTE*/
        qualitys : items,
        subtitle : subtitle,
    })

});

app.get("/about", function(req, res){
    const items = itemsGlobal;
    res.render("pages/about", {
        qualitys : items, 
        subtitle : subtitle,
    });
})
/* app CARREGA TUDO DO EXPRESS, LISTEN É UMA FUNÇÃO QUE FICA DENTRO DO EXPRESS QUE FICA OUVINDO A PORTA 8080, QUANDO A PORTA 8080 FOR CHAMADA IRÁ 
EXECUTAR TUDO DENTRO    DO ARQUIVO server.js */
console.log("teste");
app.listen(8080);
/* GET & SET SÃO METODOS CONTIDOS DENTRO DO EXPRESS */