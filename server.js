// import express from 'express';
async function connectToDb() {
    await client.connect();
}

const express = require("express");
const bodyParser = require("body-parser");
const {MongoClient} = require('mongodb');
const url = ('mongodb://localhost:27017');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new MongoClient(url);

connectToDb();
let db = client.db('mydb');
let products = db.collection('products');

app.listen(8081);

app.get('/products', async function (req, res) {
    let products = await getProducts();
    console.log(products);
    res.send(`Product list - ${products}`);
});

app.post('/products', async function (req, res) {
    const data = req.body;
    
    await products.insertOne(data);
    res.send(`Recieved data - ${data}` );
});

function getProducts() {
    let productList = products.find().toArray();

    return productList;
}