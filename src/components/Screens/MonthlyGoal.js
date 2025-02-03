import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MonthlyGoal = ({ progress, chartData, chartConfig }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Monthly Goal Progress</Text>
            <Text style={styles.progress}>Progress: {Math.round(progress * 100)}%</Text>
            <LineChart
                data={chartData}
                width={350}
                height={220}
                chartConfig={chartConfig}
                style={styles.chart}
            />
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
    progress: {

        fontSize: 14,
        color: '#7f8c8d',
        marginTop: 8,
    },
    chart: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
});

export default MonthlyGoal;
