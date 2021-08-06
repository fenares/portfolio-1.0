//Para rodar o servidor utilizando o nodemon, depois de instalarem as dependencias nos seus projetos (node_modules esta no .gitignore), e usem o comando npm run dev. Já esta tudo configurado

// Já deixei todas as páginas HTML previamente criadas (com a fonte Roboto incluída) com seus respectivos css já linkados, inclusive o global

const express = require('express')
const path = require("path")
const rotasIndex = require("./routes/index")

const app = express()

app.set("view engine","ejs")
app.set("views", path.resolve("views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(rotasIndex)

app.listen(3000, () => console.log("Server running!"))


