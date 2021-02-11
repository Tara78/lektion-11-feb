const fs = require('fs'); 
const express = require('express'); 
// skapa en server from express
const server= express(); 

server.get('/books', (request, response)=>{
fs.readFile('childrensbooks.json', 'utf8', (error, content)=>{
    response.send(content); 
})
})


// server lyssnar pa en spesifik port( i detta fall 7000)
server.listen (7000, ()=>{
    console.log('Server started on http://localhost:7000'); 
});
