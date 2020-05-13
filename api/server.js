const express = require('express');
const server = express();
const knex = require('knex');
const knexfile = require("../knexfile");
const db = require('../data/dbConnections');
server.use(express.json());

server.get("/", (req,res) =>{
    db('cars')
    .then(vehicles=>{res.status(200).json({data:vehicles})})
    .catch(err=>{res.status(500).json({message:err})})
})

  module.exports = server 