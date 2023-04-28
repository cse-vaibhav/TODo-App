import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Button({ buttonText, onPress }) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2E9E95',
        width: 302,
        paddingVertical: 24,
        borderRadius: 100,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 18,
    },
});