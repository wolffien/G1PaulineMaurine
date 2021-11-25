import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    // enlever le rafraichissement auto de la page
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        // remet à zéro après validation
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {/* barre d'input pour ajouter un todo */}
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            {/* bouton valider */}
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
