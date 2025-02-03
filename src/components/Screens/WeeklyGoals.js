import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeeklyGoals = ({ weeklyGoals }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Weekly Goals</Text>
            <View style={styles.goalsContainer}>
                {weeklyGoals.map((goal, index) => (
                    <View
                        key={index}
                        style={[
                            styles.goal,
                            goal === 1 ? styles.completed : styles.incomplete,
                        ]}
                    >
                        <Text style={styles.goalText}>Week {index + 1}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    goalsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    goal: {
        width: '30%',
        padding: 8,
        margin: 4,
        alignItems: 'center',
        borderRadius: 8,
    },
    completed: {
        backgroundColor: '#27ae60',
    },
    incomplete: {
        backgroundColor: '#e74c3c',
    },
    goalText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default WeeklyGoals;
