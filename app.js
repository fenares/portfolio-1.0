//Para rodar o servidor utilizando o nodemon, depois de instalarem as dependencias nos seus projetos (node_modules esta no .gitignore), e usem o comando npm run dev. Já esta tudo configurado

// Já deixei todas as páginas HTML previamente criadas (com a fonte Roboto incluída) com seus respectivos css já linkados, inclusive o global

const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(3000, () => console.log("Server running!"))

app.get("/", (req, res) => { res.sendFile(__dirname + "/views/home.html")})
app.get("/home", (req, res) => { res.redirect("/")})
app.get("/carrinho", (req, res) => { res.sendFile(__dirname + "/views/carrinho.html")})
app.get("/compra", (req, res) => { res.sendFile(__dirname + "/views/compra.html")})
app.get("/lista-de-produtos", (req, res) => { res.sendFile(__dirname + "/views/lista-de-produtos.html")})
app.get("/login", (req, res) => { res.sendFile(__dirname + "/views/login.html")})
app.get("/produto", (req, res) => { res.sendFile(__dirname + "/views/produto.html")})
app.get("/sustentabilidade", (req, res) => { res.sendFile(__dirname + "/views/sustentabilidade.html")})
app.get("/usuario", (req, res) => { res.sendFile(__dirname + "/views/usuario.html")})
