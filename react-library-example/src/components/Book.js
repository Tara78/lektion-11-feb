import React from 'react';
import { useHistory } from 'react-router-dom';

function Book({ book }) {
    const history = useHistory();

    return (
        <article class="book" onClick={() => history.push(`/info/${book.id}`) } style={{ backgroundColor : book.color }}>
            <section class="bg"></section>
            <section class="content">
                <aside></aside>
                <section class="about">
                    <h2>{ book.title }</h2>
                    <h3>{ book.author }</h3>
                </section>
            </section>
        </article>
    )
}

export default Book;