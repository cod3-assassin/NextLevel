import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProgressBar} from 'react-native-paper';
import {PieChart, BarChart, LineChart} from 'react-native-chart-kit';
import WeeklyProgressTimeline from '../components/WeeklyProgressTimeline';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [waterProgress, setWaterProgress] = useState(0.5); // Water intake progress
  const weeklyProgressData = [
    {
      date: '2025-03-01',
      day: 'Monday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.6,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 30-minute workout.',
          progress: 0.8,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 2 liters of water.',
          progress: 0.5,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 2 hours of study.',
          progress: 0.7,
          icon: 'book-outline',
          color: '#9b59b6',
        },
      ],
      completedTasks: 4,
      totalTasks: 4,
      mood: 'Positive',
      notes: 'Had a productive day, but need to drink more water.',
    },
    {
      date: '2025-03-02',
      day: 'Tuesday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.7,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 45-minute workout.',
          progress: 0.9,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 2.5 liters of water.',
          progress: 0.8,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 1.5 hours of study.',
          progress: 0.6,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 7 hours.',
          progress: 1.0,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Neutral',
      notes: 'Could’ve slept a bit more, but felt good after the workout.',
    },
    {
      date: '2025-03-03',
      day: 'Wednesday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.5,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 30-minute workout.',
          progress: 0.6,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 2 liters of water.',
          progress: 0.7,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 3 hours of study.',
          progress: 0.9,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 6 hours.',
          progress: 0.8,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Good',
      notes: 'Had a good balance between work and rest.',
    },
    {
      date: '2025-03-04',
      day: 'Thursday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.9,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 1-hour workout.',
          progress: 0.8,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 3 liters of water.',
          progress: 0.9,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 2 hours of study.',
          progress: 0.7,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 8 hours.',
          progress: 1.0,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Great',
      notes: 'Felt super energized today.',
    },
    {
      date: '2025-03-05',
      day: 'Friday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.8,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 30-minute workout.',
          progress: 0.9,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 2.5 liters of water.',
          progress: 0.8,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 3 hours of study.',
          progress: 1.0,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 7 hours.',
          progress: 0.9,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Good',
      notes: 'Enjoyed the workout, need to push myself more next week.',
    },
    {
      date: '2025-03-06',
      day: 'Saturday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.7,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 45-minute workout.',
          progress: 0.8,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 2 liters of water.',
          progress: 0.6,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 2 hours of study.',
          progress: 0.7,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 6 hours.',
          progress: 0.7,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Neutral',
      notes: 'Felt a bit tired after the workout, but made progress in study.',
    },
    {
      date: '2025-03-07',
      day: 'Sunday',
      tasks: [
        {
          id: '1',
          title: 'Food Tracking',
          description: 'Logged meals and snacks.',
          progress: 0.8,
          icon: 'restaurant-outline',
          color: '#f39c12',
        },
        {
          id: '2',
          title: 'Exercise Routine',
          description: 'Completed 1-hour workout.',
          progress: 1.0,
          icon: 'barbell-outline',
          color: '#e74c3c',
        },
        {
          id: '3',
          title: 'Water Intake',
          description: 'Drank 3 liters of water.',
          progress: 1.0,
          icon: 'water-outline',
          color: '#3498db',
        },
        {
          id: '4',
          title: 'Study Goals',
          description: 'Completed 1 hour of study.',
          progress: 0.5,
          icon: 'book-outline',
          color: '#9b59b6',
        },
        {
          id: '5',
          title: 'Sleep',
          description: 'Slept for 8 hours.',
          progress: 1.0,
          icon: 'bed-outline',
          color: '#2ecc71',
        },
      ],
      completedTasks: 5,
      totalTasks: 5,
      mood: 'Excellent',
      notes: 'Great end to the week, feeling accomplished!',
    },
  ];

  const weeklyData = [
    {
      date: 'Mon',
      completedTasks: 5,
      totalTasks: 7,
      tasks: [
        {icon: 'restaurant-outline', color: '#f39c12'},
        {icon: 'barbell-outline', color: '#e74c3c'},
      ],
    },
    {
      date: 'Tue',
      completedTasks: 4,
      totalTasks: 6,
      tasks: [
        {icon: 'book-outline', color: '#9b59b6'},
        {icon: 'water-outline', color: '#3498db'},
      ],
    },
    {
      date: 'Wed',
      completedTasks: 6,
      totalTasks: 8,
      tasks: [
        {icon: 'barbell-outline', color: '#e74c3c'},
        {icon: 'water-outline', color: '#3498db'},
        {icon: 'book-outline', color: '#9b59b6'},
      ],
    },
    {
      date: 'Thu',
      completedTasks: 3,
      totalTasks: 5,
      tasks: [
        {icon: 'restaurant-outline', color: '#f39c12'},
        {icon: 'book-outline', color: '#9b59b6'},
      ],
    },
    {
      date: 'Fri',
      completedTasks: 7,
      totalTasks: 7,
      tasks: [
        {icon: 'water-outline', color: '#3498db'},
        {icon: 'restaurant-outline', color: '#f39c12'},
      ],
    },
    {
      date: 'Sat',
      completedTasks: 2,
      totalTasks: 4,
      tasks: [
        {icon: 'barbell-outline', color: '#e74c3c'},
        {icon: 'book-outline', color: '#9b59b6'},
      ],
    },
    {
      date: 'Sun',
      completedTasks: 6,
      totalTasks: 7,
      tasks: [
        {icon: 'restaurant-outline', color: '#f39c12'},
        {icon: 'water-outline', color: '#3498db'},
      ],
    },
  ];

  const [monthlyProgress, setMonthlyProgress] = useState([
    30, 40, 50, 60, 70, 75, 80,
  ]); // Dummy monthly data

  const userName = 'John';

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const taskData = [
    {
      id: '1',
      title: 'Track Food',
      description: 'Log meals and snacks.',
      progress: 0.6,
      icon: 'restaurant-outline',
      color: '#f39c12',
      lastDate: 'Feb 10, 2025',
    },
    {
      id: '2',
      title: 'Exercise Routine',
      description: 'Complete today’s workout.',
      progress: 0.8,
      icon: 'barbell-outline',
      color: '#e74c3c',
      lastDate: 'Feb 11, 2025',
    },
    {
      id: '3',
      title: 'Drink Water',
      description: 'Stay hydrated with 8 glasses.',
      progress: 0.5,
      icon: 'water-outline',
      color: '#3498db',
      lastDate: 'Feb 9, 2025',
    },
    {
      id: '4',
      title: 'Study Plan',
      description: 'Focus on today’s study goals.',
      progress: 0.7,
      icon: 'book-outline',
      color: '#9b59b6',
      lastDate: 'Feb 12, 2025',
    },
  ];

  const chartData = [
    {name: 'Food', population: 30, color: '#f39c12'},
    {name: 'Exercise', population: 20, color: '#e74c3c'},
    {name: 'Water', population: 25, color: '#3498db'},
    {name: 'Study', population: 25, color: '#9b59b6'},
  ];

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {r: '5'},
  };

  return (
    <FlatList
      style={{padding: 15}}
      ListHeaderComponent={
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>{getGreeting()},</Text>
              <Text style={styles.userName}>{userName} 👋</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          {/* Water Tracking */}
          <View style={styles.waterSection}>
            <Text style={styles.sectionTitle}>Daily Water Intake</Text>
            <ProgressBar
              progress={waterProgress}
              color="#3498db"
              style={styles.progressBar}
            />
            <Text style={styles.progressText}>
              {Math.round(waterProgress * 100)}% Complete
            </Text>
          </View>

          {/* Today's Overview */}
          <View style={[styles.progressSection, {padding: 15}]}>
            <Text style={styles.sectionTitle}>Today's Overview</Text>
            <PieChart
              data={chartData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
              style={styles.chart}
              absolute
            />
            <ProgressBar
              progress={0.65}
              color="#e74c3c"
              style={[styles.progressBar, {marginTop: 10}]}
            />
            <Text style={styles.progressText}>65% Overall Progress</Text>
          </View>

          {/* Weekly Progress */}
          <View style={styles.progressSection}>
            <WeeklyProgressTimeline
              data={weeklyProgressData}
              weeklyData={weeklyData}
            />
          </View>

          {/* Monthly Progress */}
          <View style={[styles.progressSection, {padding: 15}]}>
            <Text style={styles.sectionTitle}>Monthly Progress</Text>
            <LineChart
              data={{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{data: monthlyProgress}],
              }}
              width={340}
              height={220}
              chartConfig={chartConfig}
              style={styles.chart}
              withInnerLines={false}
            />
          </View>
        </View>
      }
      data={taskData}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Icon
              name={item.icon}
              size={28}
              color={item.color}
              style={styles.taskIcon}
            />
            <Text style={styles.taskTitle}>{item.title}</Text>
          </View>
          <Text style={styles.taskDescription}>{item.description}</Text>
          <ProgressBar
            progress={item.progress}
            color={item.color}
            style={styles.taskProgressBar}
          />
          <Text style={styles.taskProgressText}>
            {Math.round(item.progress * 100)}% Complete
          </Text>
          <Text style={styles.taskDate}>Due Date: {item.lastDate}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  greeting: {fontSize: 18, color: '#333'},
  userName: {fontSize: 22, fontWeight: 'bold', color: '#3498db'},
  profileImage: {width: 45, height: 45, borderRadius: 22.5},
  waterSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
  },
  progressSection: {
    marginBottom: 20,
    // padding: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
  },
  chart: {marginVertical: 10},
  progressBar: {height: 8, borderRadius: 4},
  progressText: {fontSize: 12, color: '#555', alignSelf: 'flex-end'},
  taskCard: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
  },
  taskHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  taskIcon: {marginRight: 10},
  taskTitle: {fontSize: 18, fontWeight: 'bold', color: '#333'},
  taskDescription: {fontSize: 14, color: '#777', marginBottom: 10},
  taskProgressBar: {height: 8, borderRadius: 4, marginVertical: 10},
  taskProgressText: {fontSize: 12, color: '#555', alignSelf: 'flex-end'},
  taskDate: {fontSize: 12, color: '#888', marginTop: 5},
});

export default HomeScreen;
