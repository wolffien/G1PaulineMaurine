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

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };
    //supression d'une todo avec JP

            //todo[1]=null
            // ou
            // todos[1].id=''
            // todos[1].title=''
            // todos[1].description=''
            // et on recopie
            // todos[1]=todos[2]
            // todos[2]=todos[3]
            // 
            // todos[n]=todos[n+1]

            //     n=1
            //     // todos[n]=todos[n+1]
            //     n++
            //     // todos[n]=todos[n+1]
            //     n++
            //     // todos[n]=todos[n+1]
            //     n++


            //     for(let n=nuLigneASUp; n<todos.length-1;n++){
            //         todos[n]=todos[n+1]
            //     }

            //     setTodos(updatedTodos)
            // };


            // Barre la todo quand on clique sur son texte (signifie qu'elle a été réalisée)
            const completeTodo = id => { //fonction completeTodo prend en paramètre id 
                let updatedTodos = todos.map( //avec le map on parcour chaque cellule du tableau todos
                    (todo) => { // et on fait appel à une fonction anonyme ( pas de nom) qui prend en paramèrtre todo (une cellule du tableau)
                        if (todo.id === id) { // si l'id de la cellule = id passé en paramètre alors
                            todo.isComplete = !todo.isComplete; // on intervertit l'état de la chose à faire
                        }
                        return todo; // retourne la chose à faire 
                    }
                )
            }
            
    //Modification d'une todo déjà existante
    const updateTodo = (id, todo) => {

        const updatedTodos = [...todos, todo].filter(todo => todo.id !== id);

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

    // utiliser directement la coyleur saisie comme couleiur à appliquer
// passer par un switcher
    return (
        <div
            //className={etatValide === "beige" ? 'beige' : 'clair'}
            style={{ backgroundColor: etatValide }}
        >

            <p>
                <br></br>
                <input
                    className='todo-input'
                    value={etatSaisi}
                    onChange={lorsDuChangement}
                    placeholder='Écrire une couleur en anglais'
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
