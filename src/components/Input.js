import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChange, placeholder, secureTextEntry, style }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={[styles.input, style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
        marginBottom: 16,
    },
});

export default Input;
