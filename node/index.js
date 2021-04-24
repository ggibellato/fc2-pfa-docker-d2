const express = require('express')
const app = express()
const { connection, query} = require('./db')

var dbConfig = {
    host: "mysql",
    user: "root",
    password: "root",
    database: "nodedb"
};

app.get('/', async (req, res) => {
    var ret = "<ul>";
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, 'SELECT * FROM modules').catch(console.log);
    results.forEach((v) => ret += `<li>${v.nome}</li>`);
    ret += "</ul>";
    res.send(ret);
})

app.listen(3000, ()=> {
    console.log("Rodando na porta 3000")
})