import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../assets/childrensbooks.json';
import { useHistory } from 'react-router-dom';

/**
 * 1. Hämta id från url:en exempelvis localhost:3000/info/1 
 * 2. Läs in childrensbooks.json
 * 3. Filtera ut den bok som motsvarar det ID som finns i url:en
 * 4. Visa detaljerad info om bok
 */


function BookInfo() {
    //Hämtar ut vad som finns i url:en efter /info det som i App.js är :id
    const { id } = useParams();
    const history = useHistory();
    const [book , setBook] = useState({});
    console.log('useParams: ', id);

    useEffect(() => {
        console.log('Books ', books);
        //Filtera ut den bok som motsvarar det ID som finns i url:en
        const foundBook = books.filter((bookObj) => {
            return bookObj.id === parseInt(id);
        });

        console.log(foundBook);
        setBook(foundBook[0]);
    }, [])

    return (
        <main class="background-dark">
            <div class="book-info">
                <header>
                    <a href="#" class="back" onClick={ () => history.push('/') }>&#8592;</a>
                </header>
                <section class="display">
                    <article class="book" style={{ backgroundColor: book.color }}>
                        <section class="bg"></section>
                        <section class="content">
                            <aside></aside>
                            <section class="about">
                                <h2>{ book.title }</h2>
                                <h3>{ book.author }</h3>
                            </section>
                        </section>
                    </article>
                </section>
                <section class="info">
                    <h1>{ book.title }</h1>
                    <h3>{ book.author }</h3>
                    <p>{ book.plot }</p>
                    <footer>
                        <p><b>Audience:</b> { book.audience }</p>
                        <p><b>First Published:</b> { book.year }</p>
                        <p><b>Pages:</b> { book.pages || '-' }</p>
                        <p><b>Publisher:</b> { book.publisher }</p>
                    </footer>
                </section>
            </div>
        </main>
    )
}

export default BookInfo;