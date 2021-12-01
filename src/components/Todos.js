import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


// Todo sert à afficher les todo une fois qu'elles sont validées dans l'input

function Todos({ todos, completeTodo, removeTodo, updateTodo }) {
    const [editingTodo, setEditingTodo] = useState(undefined)

    // fonction modifier un todo
    const submitUpdate = value => {
        updateTodo(editingTodo.id, value);
        setEditingTodo(undefined)
    }
    // si la modification est true, alors afficher la todo modifiée
    if (editingTodo) {
        return <TodoForm values={editingTodo} onSubmit={submitUpdate} />;
    }

    
    return todos.map((todo, index) => (
        <div
            // si la todo est cliquée, elle renvoie à du css qui coche la todo
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            {/* retourner le texte de la todo */}
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
                {<br></br>}
                {<br></br>}
                {todo.description}
            </div>

            {/* Associe les icônes à leur action */}
            <div className='icons'>
                <RiCloseCircleLine
                    // quand on clique sur l'icone croix, renvoie à la fonction delete et supprime la todo
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    // quand on clique sur l'icone de modification, renvoie à la fonction update et modification
                    onClick={() => setEditingTodo(todo)}
                    className='edit-icon'
                />
            </div>

        </div>
    ));
}

export default Todos;
