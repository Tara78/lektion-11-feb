/**
 * API - Shakespeare insults
 * 
 * URL: /insults  
 * Metod: GET
 * Description: Hämtar alla förolämpningar
 * 
 * URL: /insult
 * Metod: GET
 * Description: Slumpar en förolämpning och skickar tillbaka
 */

const express = require('express');
const cors = require('cors');
//Skapa en server från express
const server = express();

server.use(cors());

const insults = [
    {
        "insult": "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner? ",
        "play": "Macbeth"
    },
    {
        "insult": "Never hung poison on a fouler toad ",
        "play":"Richard III"
    },
    {
        "insult": "He thinks too much: such men are dangerous. ",
        "play":"Julius Ceasar"

    },
    {
        "insult": "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs. ",
        "play":"The Merchant of Venice"

    },
    {
        "insult": "Give me your hand...I can tell your fortune. You are a fool",
        "play":" The Two Noble Kinsmen"

    },
    {
        "insult": "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish! ",
        "play":"The Tempest"

    },
    {
        "insult": "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
        "play":"Macbeth"

    },
    {
        "insult": "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake",
        "play":"Titus Andronicus"

    },
    {
        "insult": "He hath eaten me out of house and home; he hath put all substance into that fat belly of his",
        "play":" Henry IV, Part 2"

    },
    {
        "insult": "Out, you green-sickness carrion! Out, you baggage! You tallow-face! ",
        "play":"Romeo and Juliet"

    }

]

server.get('/insults', (request, response) => {
    response.send(insults);
});

server.get('/insult', (request, response) => {
    const index = Math.floor(Math.random() * insults.length);
    response.send(insults[index]);
});


//Servern lyssnar på en specifik port (i detta fall 7000)
//Lyckades det så kör den nedanstående funktion
server.listen(7000, () => {
    console.log('Server started on http://localhost:7000');
});