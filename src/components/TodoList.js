import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { TiTree } from 'react-icons/ti';

// todolit sert à utiliser les infos qu'on récupère dans les form/input que l'on retrouve dans TodoForm

function TodoList() {
    const [todos, setTodos] = useState([]);

    // fonction qui permet de ne pas avoir de gros espaces / bugs lors de l'input
    // (ex : mau          rine deviendra mau rine)
    // ex 2 : ne peut pas entrer une série d'espaces seuls)
    const addTodo = (todo) => {
        // if (!todo.text || /^\s*$/.test(todo.text)) {
        //     return;
        // }

        // fonction qui permet d'ajouter/conserver une todo dans la data (console de inspecter) dès validation
        const newTodos = [...todos, todo];

        setTodos(newTodos)
    };

    // idem que la fonction au dessus pour la syntaxe mais pour l'update
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        
        // fonction qui permet de modifier une todo si le texte tapé est différent
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item))
        );
    };


    // fonction supprimer une Todo si appuyer sur l'icone
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    // afficher la todo quand on valide
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    const values = {
        titre:"",
        description:""
    }


    return (
        <div>
            <h1>Bucket List</h1>
            {/* ajouter le form quand on tape qqch dans l'input */}
            <TodoForm onSubmit={addTodo} value={values} />
            {/* afficher la todo une fois validé, ainsi que l'option supp et edit */}
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
