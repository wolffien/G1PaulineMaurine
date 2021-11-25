import React from 'react';
import './header.css';
import { StyleSheet, Text, View } from 'react-native';

// créer une fonction qui va s'éxecuter et s'appeler Header
export default function Header() {
    // ce que cela fera à l'écran :
    return (
        <div className="header">
            <h1 className="title">My todos</h1>
        </div>
    )
}


// style disponible dans header.css

// const styles = StyleSheet.create({
//     header: {
//         height: 80,
//         paddingTop: 38,
//         backgroundColor: 'coral'
//     },
//     title: {
//         textAlign: 'center',
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
// });