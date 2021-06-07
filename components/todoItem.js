import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, delItem }) {

    return(
        <TouchableOpacity style={styles.touchable} onPress={()=>delItem(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
            <Text style={styles.itemDate}>
                {item.date}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: -2,
        padding: 10,
        marginTop: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemDate: {
        textAlign: 'right',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#bbb'
    },
    
    touchable: {
        alignSelf: 'center',
        width: 350,
    }

})