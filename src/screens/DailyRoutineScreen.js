import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DailyRoutineScreen = () => {
    // Dummy data for tasks
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "5 Daily Prayers",
            icon: "sunny-outline",
            duration: 2,
            subtasks: [
                { name: "Fajr", completed: false },
                { name: "Dhuhr", completed: false },
                { name: "Asr", completed: false },
                { name: "Maghrib", completed: false },
                { name: "Isha", completed: false }
            ],
        },
        {
            id: 2,
            name: "Study",
            icon: "book-outline",
            duration: 3,
            subtasks: [
                { name: "Math", completed: false },
                { name: "Science", completed: false },
                { name: "Programming", completed: false }
            ],
        },
        {
            id: 3,
            name: "Exercise",
            icon: "barbell-outline",
            duration: 1,
            subtasks: [
                { name: "Cardio", completed: false },
                { name: "Weight Lifting", completed: false }
            ],
        },
        {
            id: 4,
            name: "Meeting with Client",
            icon: "people-outline",
            duration: 1,
            subtasks: [],
        },
        {
            id: 5,
            name: "Watch a Movie",
            icon: "film-outline",
            duration: 2,
            subtasks: [],
        },
        {
            id: 6,
            name: "Sleep",
            icon: "bed-outline",
            duration: 7,
            subtasks: [],
        }
    ]);

    const [expandedTask, setExpandedTask] = useState(null);
    const [taskCompletion, setTaskCompletion] = useState({});

    // Calculate busy and free time based on tasks
    const totalBusyTime = tasks.reduce((total, task) => total + task.duration, 0);
    const freeTime = 24 - totalBusyTime;

    const toggleExpand = (taskId) => {
        setExpandedTask(expandedTask === taskId ? null : taskId);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleSubtaskCompletion = (taskId, subtaskIndex) => {
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === taskId) {
                    const updatedSubtasks = [...task.subtasks];
                    updatedSubtasks[subtaskIndex].completed = !updatedSubtasks[subtaskIndex].completed;
                    return { ...task, subtasks: updatedSubtasks };
                }
                return task;
            })
        );
    };

    const removeTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Time Overview */}
                <View style={styles.timeContainer}>
                    <View style={styles.timeBox}>
                        <Icon name="time-outline" size={28} color="#f39c12" />
                        <Text style={styles.timeText}>Busy: {totalBusyTime}h</Text>
                    </View>
                    <View style={styles.timeBox}>
                        <Icon name="checkmark-circle-outline" size={28} color="#27ae60" />
                        <Text style={styles.timeText}>Free: {freeTime}h</Text>
                    </View>
                </View>

                {/* Task List */}
                {tasks.map(task => (
                    <View key={task.id} style={styles.taskCard}>
                        {/* Task Header */}
                        <TouchableOpacity onPress={() => toggleExpand(task.id)} style={styles.taskHeader}>
                            <Icon name={task.icon} size={24} color="#3498db" />
                            <View style={styles.taskDetails}>
                                <Text style={styles.taskTitle}>{task.name}</Text>
                                <Text style={styles.taskTime}><Icon name="time-outline" size={14} /> {task.duration}h</Text>
                            </View>
                            <Icon name={expandedTask === task.id ? "chevron-up" : "chevron-down"} size={24} color="#777" />
                        </TouchableOpacity>

                        {/* Subtasks */}
                        {expandedTask === task.id && (
                            <View style={styles.subTaskContainer}>
                                {task.subtasks.map((subTask, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.subTask, subTask.completed && styles.completed]}
                                        onPress={() => toggleSubtaskCompletion(task.id, index)}
                                    >
                                        <Icon name={subTask.completed ? "checkmark-circle" : "ellipse-outline"} size={20} color={subTask.completed ? "#27ae60" : "#ccc"} />
                                        <Text style={styles.subTaskText}>{subTask.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}

                        {/* Task Actions */}
                        <View style={styles.taskActions}>
                            <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
                                <Icon name={task.completed ? "checkmark-circle" : "ellipse-outline"} size={26} color={task.completed ? "#27ae60" : "#ccc"} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeTask(task.id)}>
                                <Icon name="trash-outline" size={26} color="#e74c3c" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
        color: '#333',
    },
    taskCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
    },
    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskDetails: {
        flex: 1,
        marginLeft: 10,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    taskTime: {
        fontSize: 14,
        color: '#777',
    },
    subTaskContainer: {
        marginTop: 10,
        paddingLeft: 30,
    },
    subTask: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    subTaskText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#555',
    },
    completed: {
        opacity: 0.5,
    },
    taskActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
});

export default DailyRoutineScreen;
