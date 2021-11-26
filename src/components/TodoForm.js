import React, { useState, useEffect, useRef } from 'react';

// todoform sert à faire les input des formulaires "modifier" et "ajouter"

// props = { value, onSubmit }
function TodoForm(props) {

    // if (value)
    // quand on update ça ne perd pas ce que l'user avait écrit
    const [title, setTitle] = useState(props.value.titre)
    const [description, setDescription] = useState(props.value.titre)

    //fonction pour choisir où va le curseur texte (quand il y a "ajouter" et "éditer" sur la même page)
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

        // faire en sorte que le btn "ajouter" conserve la data
        // ET/OU ajoute une nouvelle todo au tableau des todo
        props.onSubmit({
            // mettre une id à chaque todo, qui est un nombre compris entre 1 et 10000
            id: Math.floor(Math.random() * 10000),
            title: title,
            description: description
            // text: description
        });

        // remet à zéro l'input après validation
        setTitle('');
        setDescription('');
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
                        value={title}
                        name='text'
                        className='todo-input edit'
                        onChange={handleTitleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Modifier</button>
                </>
            ) : (
                <>
                    {/* champ de texte d'ajouter une todo */}
                    <input
                        type='text'
                        placeholder="Titre de l'expérience"
                        value={title}
                        name='text'
                        className='todo-input'
                        onChange={handleTitleChange}
                        ref={inputRef}
                    />
                    <input
                        type='text'
                        placeholder="Description de l'expérience"
                        value={description}
                        name='text'
                        className='todo-input'
                        onChange={handleDescriptionChange}
                    // ref={inputRef}
                    />
                    <button className='todo-button'>Ajouter</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
