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

//Before
// server.get("/:id", (req,res) =>{
//     db('cars').where({id:req.params.id})
//     .then(vehicles=>{res.status(200).json({data:vehicles} )})
//     .catch(err=>{res.status(500).json({message:err})})
// })
// After
server.get("/:id", (req,res) =>{
    db('cars').where({id:req.params.id})
    .then(vehicles=>{
       if(vehicles.length === 0) { res.status(404).json({message: "LIIESS"})} 
       else {res.status(200).json({data:vehicles} )}})
    .catch(err=>{res.status(500).json({message:err})})
})
// server.get = push 200 down to add an if else, if checks if empty FIRST!!!!

// for req.body to work you need all required feilds filled
// server.post("/", (req, res) => {
//     db('cars').insert(req.body)
//     .then(count => { db('cars').where({id:count})
//     .then(vehicles=>{
//        if(vehicles.length === 0) { res.status(404).json({message: "LIIESS"})} 
//        else {res.status(200).json({data:vehicles} )}})
//     .catch(err=>{res.status(500).json({message:err})})})
// })
// above would add a new car to count but not return the list 
server.post("/", (req, res) => {
    db('cars').insert(req.body)
    .then(count => { db('cars')
    .then(vehicles=>{res.status(200).json({data:vehicles})})
    .catch(err=>{res.status(500).json({message:err})})})
})






  module.exports = server 