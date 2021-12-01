import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';
//import { TiTree } from 'react-icons/ti';

// ToDoList.js permet de gérer toutes les interactions en lien avec les todos

function TodoList() {

    //Ajoute une todo à la liste
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {

        const newTodos = [...todos, todo];

        setTodos(newTodos)
    };

    //Modification d'une todo déjà existante
    const updateTodo = (id, todo) => {
        
        const updatedTodos = [...todos, todo];
       
        setTodos(updatedTodos)
    };


    // Suppression d'une todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    // Barre la todo quand on clique sur son texte (signifie qu'elle a été réalisée)
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Bucket List</h1>
            <TodoForm onSubmit={addTodo} />
            {/* afficher la todo une fois validé, ainsi que l'option supp et edit */}
            <Todos
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
