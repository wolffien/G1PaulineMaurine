import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem.js';
import './CSS/App.css';
import './components/todoItem.css';
import './components/addTodo.js';

// interagit avec la fonction todoItem et la renvoie là quand il y a une interaciton
export default function App() {
    const [todos, setTodos] = useState([
        // chaque texte correspond à une to do
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3'},
    ]);
    // faire en sorte que la key renvoie vers todoItems
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            // faire un true or false pour supprimer la fonction
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    return (
        // cette view comprends toute les autres view
        <div className="container">
            {/* appeler le component header qui a été crée dans ./components/header.js */}
            <Header />
            <div className="content">
                {/* to form */}
                <div className="list">
                    <FlatList
                        data={todos}
                        // cette fonction va retourner les listes
                        renderItem={({ item }) => (
                            // appeler le component TodoItem et la const pressHandler
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

// stylesheet de la page en js (retrouvable dans app.js)

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundcolor: '#fff',
//     },
//     // styliser la view qui s'appelle content (avant la liste)
//     content: {
//         padding: 40,
//     },
//     // styliser la view qui s'appelle list = le form
//     list: {
//         margintTop: 20,
//     }
// });