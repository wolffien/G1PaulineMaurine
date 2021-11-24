import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
            {/* view qui prends en compte le header */}
            <View style={styles.content}>
                {/* to form */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        // cette fonction va retourner les listes
                        renderItem={( item ) => (
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
    }
});