import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import './todoItem.css';

// créer la fonction pour supprimer des todo
// appeler {item} appelle automatiquement le bon item sans le mentionner spécifiquement
// chaque item que l'on fera sera automatiquement renvoyé à ce script
export default function TodoItem({ item, pressHandler }) {
    return (
        // TouchableOpacity = quand on touche cela change l'opacité
        // quand on clique sur un item, cela appelle la key.item de la const pressHandler
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            {/* comprends tous les items qui sont du texte */}
            <div className="item" >{item.text}</div>
        </TouchableOpacity>
    )
}