import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const WeeklyProgress = ({weeklyData = [], data = []}) => {
  const validWeeklyData = Array.isArray(weeklyData) ? weeklyData : [];
  const validData = Array.isArray(data) ? data : [];

  // Bar chart data with 7 days
  const chartData = {
    labels: validWeeklyData.map(item => item.date),
    datasets: [
      {
        data: validWeeklyData.map(item => item.completedTasks),
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Weekly Progress Overview</Text>

      <BarChart
        data={chartData}
        width={screenWidth - 40}
        height={200}
        yAxisLabel=""
        chartConfig={chartConfig}
        fromZero
        style={styles.chart}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={screenWidth}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContainer}>
        {validData.map((item, index) => (
          <View key={index} style={styles.dayCard}>
            <Text style={styles.dateText}>{item.day}</Text>

            <View style={styles.taskList}>
              {item.tasks.map((task, taskIndex) => (
                <View key={taskIndex} style={styles.taskRow}>
                  <Icon
                    name={task.icon}
                    size={22}
                    color={task.color}
                    style={styles.taskIcon}
                  />
                  <Text style={styles.taskText}>
                    {task.title} - {Math.round(task.progress * 100)}%
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.taskCount}>
              {item.completedTasks} / {item.totalTasks} Tasks Completed
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  chart: {
    borderRadius: 15,
    marginBottom: 20,
    marginLeft: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10, // Space for padding around cards
    alignItems: 'flex-start', // Align items from the top
    justifyContent: 'center', // Ensure content is aligned
  },
  dayCard: {
    width: screenWidth - 40, // Adjust card width for better alignment
    backgroundColor: '#fff',
    padding: 20,
    marginRight: 10, // Space between cards
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 10,
    elevation: 8,
    flex: 1, // Ensure all cards have the same height
    minHeight: 300, // Set a minimum height for consistent card size
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'right',
    marginBottom: 12,
  },
  taskList: {
    marginBottom: 15,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskIcon: {
    marginRight: 12,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  taskCount: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default WeeklyProgress;
