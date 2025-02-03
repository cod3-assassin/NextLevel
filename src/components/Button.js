import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, color = '#3498db', style }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,  // Adjusted padding for a balanced size
        paddingHorizontal: 20, // Adjusted to make the button size more consistent
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        minHeight: 45, // Adjusted height to fit the new padding
        minWidth: 160, // Ensured a comfortable width for the text
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
