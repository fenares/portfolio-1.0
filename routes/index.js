const express = require("express")
const routes = express.Router()


routes.get("/", (req, res) => { res.render("home")})
routes.get("/home", (req, res) => { res.redirect("/")})
routes.get("/carrinho", (req, res) => { res.render("carrinho")})
routes.get("/compra", (req, res) => { res.render("compra")})
routes.get("/lista-de-produtos", (req, res) => { res.render("lista-de-produtos")})
routes.get("/login", (req, res) => { res.render("login")})
routes.get("/produto", (req, res) => { res.render("produto")})
routes.get("/sustentabilidade", (req, res) => { res.render("sustentabilidade")})
routes.get("/usuario", (req, res) => { res.render("usuario")})

module.exports = routes