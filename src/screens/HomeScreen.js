import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PieChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;


const HomeScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0.65); // Dummy progress data
    const weeklyGoals = [1, 1, 1, 1, 1, 0, 0]; // 1 = completed, 0 = not completed

    // Dummy user data
    const userName = "John"; // Replace with dynamic user data in real-world applications

    // Time-based greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    // Dummy data for activity cards
    const activityData = [
        {
            title: 'Food',
            time: 'Aug 12 • 7:35 pm',
            details: [
                { label: '10 min', icon: 'timer-outline' },
                { label: '240 calories', icon: 'flame-outline' },
                { label: '120 avg bpm', icon: 'heart-outline' },
                { label: '2 zone min', icon: 'pulse-outline' },
            ],
            icon: 'restaurant-outline',
            iconColor: '#f39c12',
        },
        {
            title: 'Walk',
            time: 'Aug 12 • 7:35 pm',
            details: [
                { label: '20 min', icon: 'timer-outline' },
                { label: '350 calories', icon: 'flame-outline' },
                { label: '115 avg bpm', icon: 'heart-outline' },
                { label: '3 zone min', icon: 'pulse-outline' },
            ],
            icon: 'walk-outline',
            iconColor: '#27ae60',
        },
        {
            title: 'Exercise',
            time: 'Aug 12 • 7:35 pm',
            details: [
                { label: '30 min', icon: 'timer-outline' },
                { label: '400 calories', icon: 'flame-outline' },
                { label: '130 avg bpm', icon: 'heart-outline' },
                { label: '5 zone min', icon: 'pulse-outline' },
            ],
            icon: 'barbell-outline',
            iconColor: '#e74c3c',
        },
    ];

    const data = [
        {
            name: "Steps",
            population: 800,
            color: "#3498db",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: "https://img.icons8.com/ios-filled/50/walking.png",
        },
        {
            name: "Calories Burned",
            population: 500,
            color: "#e74c3c",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'flame-outline',  // Icon for Calories
        },
        {
            name: "Active Minutes",
            population: 120,
            color: "#2ecc71",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'timer-outline',  // Icon for Active Minutes
        },
        {
            name: "Exercise Sessions",
            population: 50,
            color: "#f39c12",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'fitness-outline', // Icon for Exercise Sessions
            legendIcon: 'fitness-outline',
        },
        {
            name: "Exercise Sessions",
            population: 50,
            color: "#f39c12",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'fitness-outline', // Icon for Exercise Sessions
            legendIcon: 'fitness-outline',
        },
        ,
        {
            name: "Exercise Sessions",
            population: 50,
            color: "#f39c12",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'fitness-outline', // Icon for Exercise Sessions
            legendIcon: 'fitness-outline',
        },
        ,
        {
            name: "Exercise Sessions",
            population: 50,
            color: "#f39c12",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12,
            icon: 'fitness-outline', // Icon for Exercise Sessions
            legendIcon: 'fitness-outline',
        },

    ];



    const chartConfig = {
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(34, 193, 195, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: '0' }, // Hide default dots
        icon: 'fitness-outline',
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.greetingSection}>
                    <Text style={styles.greeting}>{getGreeting()},</Text>
                    <Text style={styles.userName}>{userName} 👋</Text>
                </View>

                {/* Monthly Goal */}



                <View style={styles.profileSection}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Icon name="notifications-outline" size={26} color="#555" style={styles.notificationIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.monthlyGoal}>
                <View style={styles.goalTextContainer}>
                    <Text style={styles.goalText}>Monthly Goal</Text>
                    <View style={styles.goalDetailsContainer}>
                        <Text style={styles.goalNumber}>8,530</Text>
                        <View style={styles.progressCircle}>
                            <View style={styles.innerCircle}>
                                <Text style={styles.progressText}>65%</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.chartContainer}>
                    <View style={styles.chartPlaceholder}>

                        <PieChart
                            data={data}
                            style={{ flex: 1 }}
                            width={screenWidth - 50}
                            height={200}  // Dynamic height based on data
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 1,
                                color: (opacity = 1) => `rgba(34, 193, 195, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                // style: { borderRadius: 16 },
                                propsForDots: { r: '0' }, // Hide default dots
                                scrollableDotFill: (opacity = 1) => `rgba(34, 193, 184, ${opacity})`,

                            }}
                            accessor={["population"]}
                            backgroundColor="transparent"
                            absolute

                        />




                    </View>
                </View>
            </View>

            {/* Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Icon name="restaurant-outline" size={28} color="#f39c12" />
                    <Text style={styles.statNumber}>15</Text>
                    <Text style={styles.statLabel}>Food</Text>
                </View>
                <View style={styles.statItem}>
                    <Icon name="walk-outline" size={28} color="#27ae60" />
                    <Text style={styles.statNumber}>685</Text>
                    <Text style={styles.statLabel}>Walk</Text>
                </View>
                <View style={styles.statItem}>
                    <Icon name="barbell-outline" size={28} color="#e74c3c" />
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statLabel}>Exercise</Text>
                </View>
            </View>

            {/* Weekly Goals */}
            <View style={styles.weeklyGoalsContainer}>
                <View style={styles.weeklyGoalsHeader}>
                    <Text style={styles.weeklyGoalsTitle}>Weekly Goals</Text>
                    <TouchableOpacity>
                        <Text style={styles.checkReports}>Check Reports</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.weeklyGoalsProgress}>
                    <Text style={styles.completedGoals}>5/7</Text>
                    <Text style={styles.completedLabel}>Completed</Text>
                </View>
                <View style={styles.weeklyGoalsDays}>
                    {weeklyGoals.map((day, index) => (
                        <View key={index} style={[styles.dayCircle, day ? styles.completed : styles.notCompleted]}>
                            <Text style={styles.dayText}>{"SMTWTFS"[index]}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Activity Cards */}
            <View style={styles.activityContainer}>
                {activityData.map((activity, index) => (
                    <View key={index} style={styles.activity}>
                        <View style={styles.activityHeader}>
                            {/* <Icon name={activity.icon} size={28} color={activity.iconColor} /> */}
                            <Text style={styles.activityTitle}>{activity.title}</Text>
                            <Text style={styles.activityTime}>{activity.time}</Text>
                        </View>
                        <View style={styles.activityDetails}>
                            {activity.details.map((detail, index) => (
                                <View key={index} style={styles.activityDetail}>
                                    <View style={styles.detailTab}>
                                        <Icon name={detail.icon} size={18} color="#333" style={styles.detailIcon} />
                                        <Text style={styles.activityDetailText}>{detail.label}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
            <View style={{ marginBottom: 55 }}></View>

        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#f7f7f7', // Light background for contrast
        borderRadius: 8,
        borderBottomColor: '#ddd',
    },
    greetingSection: {
        flex: 1,
    },
    greeting: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3498db',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIcon: {
        marginRight: 15,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderWidth: 2,
        borderColor: '#3498db',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },

    monthlyGoal: {
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    goalTextContainer: {
        marginBottom: 15,
    },
    goalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    goalDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    goalNumber: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
    },
    progressCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 6,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        left: -28,
    },
    innerCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 6,
        borderColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3498db',
    },
    chartContainer: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chartPlaceholder: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        color: '#777',
        fontSize: 14,
    },
    weeklyGoalsContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    weeklyGoalsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    weeklyGoalsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    checkReports: {
        color: '#3498db',
        fontSize: 16,
    },
    weeklyGoalsProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    completedGoals: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3498db',
    },
    completedLabel: {
        color: '#777',
        fontSize: 16,
    },
    weeklyGoalsDays: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    completed: {
        backgroundColor: '#27ae60',
    },
    notCompleted: {
        backgroundColor: '#ccc',
    },
    dayText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    activityContainer: {
        marginBottom: 20,
    },
    activity: {
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    activityTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    activityTime: {
        color: '#777',
        fontSize: 14,
    },
    activityDetails: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    activityDetail: {
        width: '48%',
        marginBottom: 10,
        alignItems: 'center',
    },
    detailTab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width: '90%',
        padding: 8,
        borderRadius: 8,
    },
    detailIcon: {
        marginRight: 8,
    },
    activityDetailText: {
        fontSize: 14,
        color: '#333',
    },
});

export default HomeScreen;
