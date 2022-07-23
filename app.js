const express = require('express');
const app = express();
app.get('/',(req,res) => {res.send('¡Hola mundo!')});
app.listen(3000, () => 
    console.log('Servidor C'));

app.get("/", (req,res) => {
    res.send(" bem bindo ao pagina principal");
});
app.get("/productos", (req,res) => {
    res.send(" listas de productos");
});
app.get("/nosotros", (req,res) => {
    res.send(" información de nuestra empresa");
});
app.get("/contacto", (req,res) => {
    res.send(" datos principales");
});