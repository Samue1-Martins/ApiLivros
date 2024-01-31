const express = require('express');
const app = express();
const port = 1704

let livrosMatrizesAfricanas = [
    {nome:"Umbanda Mitos e Realidade", autor:"Iassan Ayporê Pery"},
    {nome:"Cultura e religiões na contemporaneidade", autor:"Fabio lanz, Cláudia Neves da Silva, Douglas Alexandre Boschini, Edson Elias de Morais, Luiz Ernesto Guimaraes"},
    {nome:"Lendas Africanas dos Orixás", autor:"Pierre Fatumbi Verger, Carybé Corrupio"},
    {nome:"O exú desvendado", autor:"Míriam Prestes de Oxalá"},
    {nome:"Ori axé a dimensão arquetípica dos orixás", autor:"José jorge de morais zacharias"}
]

let livrosCarolinaMaria = [
    {nome:"Quarto de Despejo", autora: "Carolina Maria de Jesus"},
    {nome:"Casa de Alvenaria", autora: "Carolina Maria de Jesus"},
    {nome:"Pedaços de Fome", autora: "Carolina Maria de Jesus"},
    {nome:"Proverbios", autora: "Carolina Maria de Jesus"},
    {nome:"Diário de Bibita", autora: "Carolina Maria de Jesus"}
]

let livrosMulheresNegras = [
    {nome:"A participação das mulheres negras nos espaços de poder", autora: "Luiza Bairros"},
    {nome:"Mulheres negras na priemeira pessoa", autora: "Jurema werneck, Nilza iraci, Simone Cruz"},
    {nome:"Somos todas rainhas", autora: "Gisele Cristina dos Anjos"},
    {nome:"Não sou eu uma mulher", autora: "Bell Hooks"},
    {nome:"Lugar de negro", autora: "Lélia Gonzalez, Carlos Hasenbalg"},
]

app.get('/matrizes', (req, res)=>{
    res.json({livrosMatrizesAfricanas})
})

app.get('/carolinamaria', (req, res)=>{
    res.json({livrosCarolinaMaria})
})

app.get('/mulheresnegras', (req, res)=>{
    res.json({livrosMulheresNegras})
})

app.get('/random', (req, res)=>{
    let randomBooks = livrosMatrizesAfricanas[Math.floor(Math.random() * livrosMatrizesAfricanas.length)];
    let randomBooks2 = livrosCarolinaMaria[Math.floor(Math.random() * livrosCarolinaMaria.length)];
    let randomBooks3 = livrosMulheresNegras[Math.floor(Math.random() * livrosMulheresNegras.length)];
    
    res.json({randomBooks, randomBooks2, randomBooks3})
})

app.listen(port, ()=>{
    console.log("Rodando API!")
})