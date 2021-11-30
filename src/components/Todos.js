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

    // retourner la data stockée dans le tableau des todo
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
            {/* div qui retourne les icones */}
            <div className='icons'>
                <RiCloseCircleLine
                    // quand on clique sur l'icone, cela renvoie à la fonction supprimer la todo
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    // quand on clique, cela renvoie vers la fonction "éditer la todo"
                    onClick={() => setEditingTodo(todo)}
                    className='edit-icon'
                />
            </div>

        </div>
    ));
}

export default Todos;
