//importa o modulo express
const express = require('express');

//importa as rotas de usuario
const userRoutes = require('./src/routes/userRoutes');

//cria uma aplicação express
const app = express()

//middleware paara analisar JSON no corpo das requisições
app.use(express.json());

//define a porta em que o servidor ira escutar
const porta = 8000


//rota de teste da api
app.get('/', (req, res)=>{
    res.send("Testando a api")
});

//usando as rotas de usuario
app.use('/api/users', userRoutes);

//inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http:${porta}`);
    console.log(`Documentação da API em http:${porta}/api-docs`);
})