import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DailyRoutineScreen from '../screens/DailyRoutineScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View } from 'react-native';
import AddTaskModal from '../components/AddTaskModal';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const [isVisible, setIsVisible] = useState()
    const [closeModal, setCloseModel] = useState(false)
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                    position: 'absolute',
                    bottom: 10,
                    width: '80%',  // Set width to 80%
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3,
                    flexDirection: 'row', // Ensures the icons are evenly spaced
                    justifyContent: 'space-around', // Distributes space between icons evenly
                    alignSelf: 'center', // Centers the tab bar horizontally
                    marginLeft: '10%', // Adding marginLeft to center the bar horizontally
                    marginRight: '10%', // Adding marginRight for the same reason
                }

                ,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'DailyRoutine') {
                        iconName = 'stats-chart';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    } else if (route.name === 'Notifications') {
                        iconName = 'notifications';
                    }

                    return <Icon name={iconName} size={22} color={color} />;
                },
                tabBarActiveTintColor: '#3498db',
                tabBarInactiveTintColor: '#ccc',
                tabBarLabel: () => null, // Hide labels
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={22} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10, // Add padding for better touch feedback
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="DailyRoutine"
                component={DailyRoutineScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="stats-chart" size={22} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10, // Add padding for better touch feedback
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddTaskModal}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="add-circle" size={30} color={color} />
                    ),
                    tabBarButton: () => (
                        <View
                            style={{
                                top: -20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 15, // Improve touch area
                            }}
                        >
                            <View
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    elevation: 3,
                                }}
                            >
                                <Icon name="add-circle" size={30} color="#3498db" />
                            </View>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="notifications" size={22} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10, // Add padding for better touch feedback
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={22} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10, // Add padding for better touch feedback
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
