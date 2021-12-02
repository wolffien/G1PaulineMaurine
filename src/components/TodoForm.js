import React, { useState, useEffect, useRef } from 'react';

import clsx from 'clsx'
import { string } from 'prop-types';

// todoform sert à faire les input des formulaires "modifier" et "ajouter"

// props = { value, onSubmit }
function TodoForm(props) {

    const [title, setTitle] = useState(props.values?.title)
    const [description, setDescription] = useState(props.values?.description)


    const inputRef = useRef(null)
    // mettre automatiquement le curseur dans l'input de l'edit quand on clique sur edit
    useEffect(() => {
        inputRef.current.focus()
    }, []);

    // faire un input titre
    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    // faire un input description
    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    const handleSubmit = e => {
        // enlever le rafraichissement auto de la page
        e.preventDefault();


        props.onSubmit({
            // mettre une id à chaque todo, qui est un nombre compris entre 1 et 10000
            id: Math.floor(Math.random() * 10000),
            title: title,
            description: description

        });

        // remet à zéro l'input après validation
        setTitle('');
        setDescription('');
    };

    // paramètres des inputs
    return (
        <>
            {/* <p>
                <input className='todo-input' value={etatSaisi} onChange={lorsDuChangement}></input>
                <button className='todo-button' onClick={valideEtatTheme}>Changer le fond</button>
            </p> */}
            {/* <div
                className={etatValide == "vert" ? 'vert' : 'rouge'}
            ></div> */}
            <form className='todo-form' onSubmit={handleSubmit}>
                {/* bouton qui permet de changer le thème */}

                <>
                    <input
                        type="text"
                        placeholder="Titre"
                        value={title}
                        name="text"
                        className={clsx('todo-input', props.values && 'edit')}
                        onChange={handleTitleChange}
                        ref={inputRef}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        name="text"
                        className={clsx('todo-input', props.values && 'edit')}
                        onChange={handleDescriptionChange}
                    // ref={inputRef}
                    />
                    <button className={clsx('todo-button', props.values && 'edit')}>
                        {!props.values ? 'créer' : 'modifier'}
                    </button>
                </>
            </form>
        </>
    );
}

export default TodoForm;
