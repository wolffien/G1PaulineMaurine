import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

// Todo sert à afficher les todo une fois qu'elles sont validées dans l'input

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    // fonction modifier un todo
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    // si la modification est true, alors afficher la todo modifiée
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    // retourner la data stockée dans le tableau des todo
    return todos.map((todo, index) => (
        <div
            // si la todo est cliquée, elle renvoie à du css qui coche la todo
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            {/* retourner le texte de la todo */}
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            {/* div qui retourne les icones */}
            <div className='icons'>
                <RiCloseCircleLine
                    // quand on clique sur l'icone, cela renvoie à la fonction supprimer la todo
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    // quand on clique, cela renvoie vers la fonction "éditer la todo"
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>

        </div>
    ));
}

export default Todo;
