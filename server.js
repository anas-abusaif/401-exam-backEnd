const express = require('express');

const cors = require('cors');

const axios = require('axios');

const mongoose = require("mongoose");

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());

mongoose.connect(`${process.env.DATABASE}`, { useNewUrlParser: true });

const getData=require('./controlers/getData')
server.get('/',getData)

addToFavorite=require('./controlers/addToFavorite')
server.post('/addToFavorite',addToFavorite)

getFavorite=require('./controlers/getFavorite')
server.get('/getFavorite',getFavorite)

deleteFruit=require('./controlers/deleteFruit')
server.delete('/deleteFruit',deleteFruit)

updateFruit=require('./controlers/updateFruit')
server.put('updateFruit',updateFruit)

server.listen(3000,()=>console.log('listening to 3000'))