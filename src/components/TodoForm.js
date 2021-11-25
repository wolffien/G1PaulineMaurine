import React, { useState, useEffect, useRef } from 'react';

// todoform sert à faire les input des formulaires "modifier" et "ajouter"

function TodoForm(props) {
    // quand on update ça ne perd pas ce que l'user avait écrit
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    //fonction pour choisir où va le curseur texte (quand il y a "ajouter" et "éditer" sur la même page)
    const inputRef = useRef(null)
    // mettre automatiquement le curseur dans l'input de l'edit quand on clique sur edit
    useEffect(() => {
        inputRef.current.focus()
    });

    // faire en sorte que l'on puisse entrer du texte dans l'input
    const handleChange = e => {
        setInput(e.target.value);
    };

    // enlever le rafraichissement auto de la page
    const handleSubmit = e => {
        e.preventDefault();

        // faire en sorte que le btn "ajouter" conserve la data
        // ET/OU ajoute une nouvelle todo au tableau des todo
        props.onSubmit({
            // mettre une id à chaque todo, qui est un nombre compris entre 1 et 10000
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        // remet à zéro l'input après validation
        setInput('');
    };
    // ce qu'il s'affiche à l'écran (les input)
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    {/* champ de texte de modifier une todo */}
                    <input
                        type='text'
                        placeholder='Update your item'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Modifier</button>
                </>
            ) : (
                <>
                    {/* champ de texte de l'input */}
                    <input
                        type='text'
                        placeholder='Ajouter une expérience'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Ajouter</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
