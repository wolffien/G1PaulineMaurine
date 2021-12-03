import React, { useState } from 'react';
//import { RiCopyleftFill } from 'react-icons/ri';
import TodoForm from './TodoForm';
import Todos from './Todos';
//import { TiTree } from 'react-icons/ti';

// ToDoList.js permet de gérer toutes les interactions en lien avec les todos

function TodoList() {

    //Ajoute une todo à la liste
    const [todos, setTodos] = useState([]); // todos est un tableau vide
    const addTodo = (todo) => {

        const newTodos = [...todos, todo];

        setTodos(newTodos)
    };

    //Modification d'une todo déjà existante
    const updateTodo = (id, todo) => {

        const updatedTodos = [...todos, todo].filter(todo => todo.id !== id);

        setTodos(updatedTodos)
    };


    // Suppression d'une todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    // Barre la todo quand on clique sur son texte (signifie qu'elle a été réalisée)
    const completeTodo = id => { //fonction completeTodo prend en paramètre id 
        let updatedTodos = todos.map( //avec le map on parcour chaque cellule du tableau todos
            todo => { // et on fait appel à une fonction anonyme ( pas de nom) qui prend en paramèrtre todo (une cellule du tableau)
                if (todo.id === id) { // si l'id de la cellule = id passé en paramètre alors
                    todo.isComplete = !todo.isComplete; // on intervertit l'état de la chose à faire
                }
                return todo; // retourne la chose à faire 
            }
        )

        // ou en plus court JUSTE POUR LE PREMIER
        // let updatedTodos =  todos.slice()
        // debugger
        // updatedTodos[0].isComplete = !updatedTodos[0].isComplete 
       
        setTodos(updatedTodos);
    };

    // const TetatSaisi = React.useState ('') // je déclare une variable d'état + '' = chaine de caractère vide qui me sert à initialiser ma var d'état
    // const etatSaisi = TetatSaisi [0] ; //je nomme ma variable d'état etatSaisi
    // const setetatSaisi = TetatSaisi[1] //je nomme ma fonction de changement d'état

    //ou en plus court
    const [etatSaisi, setetatSaisi] = React.useState('')
    const [etatValide, setetatValide] = React.useState('')

    const lorsDuChangement = (event) => {
        // event donné en param par REACT
        // target propriété de event qui designe l'INPUT qui a déclenché l'event
        // value propriété de target qui contient la valeur de l'INPUT
        // event.target.value = la valeur saisie
        setetatSaisi(event.target.value)


    }

    const valideEtatTheme = () => {

        setetatValide(etatSaisi)

    }


    return (
        <div
            className={etatValide === "beige" ? 'beige' : 'clair'}
        >

            <p>
                <br></br>
                <input
                    className='todo-input'
                    value={etatSaisi}
                    onChange={lorsDuChangement}
                    placeholder='Écrire "clair" ou "beige"'
                ></input>
                <button className='todo-button' onClick={valideEtatTheme}>Changer le fond</button>
            </p>
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
