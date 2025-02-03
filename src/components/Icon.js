import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = ({ source, size = 24, style }) => {
    return <Image source={source} style={[styles.icon, { width: size, height: size }, style]} />;
};

const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain',
    },
});

export default Icon;
