import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//customized button coding

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const SecButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button2}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:50,
        padding: 15,
        width:'100%',
        backgroundColor:"#00aeef",
        borderRadius: 6,
        alignItems: 'center',
    },

    button2: {
        marginTop:30,
        padding: 15,
        width:'100%',
        backgroundColor:"#ffad60",
        borderRadius: 6,
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontWeight:"700",
        fontSize:22,
    }
});

export { Button, SecButton };