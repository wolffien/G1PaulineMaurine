import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import './addTodos.css';


// créer la fonction pour ajouter des Todo
export default function AddTodo() {

    // fonction qui retient ce que les users tapent
    const [text, setText] = useState('');
    // prend le texte de l'user et l'amène à la fonction
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <div className='input'>
            <TextInput
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
        </div>
    )
}