const fs = require('fs'); 
const express = require('express'); 

// skapa en server from express
const server= express(); 


server.get('/books', (request, response)=>{
fs.readFile('childrensbooks.json', 'utf8', (error, content)=>{
    response.send(content); 
}); 

})

server.get('/books/:id', (request, response) => {
    console.log('Id är: ', request.params.id);
    //Hämta id från url:en och spara i en variabel
    const id = request.params.id;
    //Läs in childrensbooks.json
    fs.readFile('childrensbooks.json', 'utf8', (error, content) => {
        //Gör om till JSON för att kunna loopa igenom
        const books = JSON.parse(content);
        //Använd arraymetoden filter för att loopa igenom och returnera ett matchande objekt
        const foundBook = books.filter((book) => {
            return book.id === parseInt(id);
        });
        //Skicka tillbaka det hittade objektet
        response.send(foundBook[0]);
    });
});



// server lyssnar pa en spesifik port( i detta fall 7000)
server.listen (7000, ()=>{
    console.log('Server started on http://localhost:7000'); 
 
});
