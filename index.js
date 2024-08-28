import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();

async function getHandler() {
    const products = await axios.get("localhost:8081/products");
    console.log(products.response);
}

async function postHandler() {
    const name = document.getElementById("input-name").value;
    const price = document.getElementById("input-price").value;
    console.log(name);
    console.log(price);
    // let res = await axios.post("localhost:8081/products");
}