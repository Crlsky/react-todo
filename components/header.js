import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header({navigation}) {

    const buttonClickedHandler = () => {
        // navigate to add screen
        console.log('add');
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo App</Text>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Form')}
                style={styles.addItemScreen}><Text>+</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'cadetblue',
        flexDirection: 'row'
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },

    addItemScreen: {
        marginRight: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        padding: 5,
        borderRadius: 100,
        fontSize: 30,
        backgroundColor: 'blue',
    }
});