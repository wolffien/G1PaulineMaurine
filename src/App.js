import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
// import './components/header.css';


export default function App() {
    const [todos, setTodos] = useState([
        // chaque texte correspond à une to do
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3'},
    ]);

    return (
        // cette view comprends toute les autres view
        <View style={styles.container}>
            {/* appeler le component header qui a été crée dans ./components/header.js */}
            <Header />
            <View style={styles.content}>
                {/* to form */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        // cette fonction va retourner les listes
                        renderItem={({ item }) => (
                            // définir que chaque note est du texte
                            <Text>{item.text}</Text>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: '#fff',
    },
    // styliser la view qui s'appelle content (avant la liste)
    content: {
        padding: 40,
    },
    // styliser la view qui s'appelle list = le form
    list: {
        margintTop: 20,
    }
});