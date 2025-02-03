import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useTasks } from '../contexts/TaskContext';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const AddTaskModal = ({ isVisible, closeModal }) => {
    const { addTask } = useTasks();
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const handleAddTask = () => {
        if (taskName.trim() !== '' && taskDate && taskTime) {
            const newTask = {
                id: Date.now(),
                name: taskName,
                date: taskDate,
                time: taskTime,
            };
            addTask(newTask);
            setTaskName('');
            setTaskDate('');
            setTaskTime('');
            closeModal();
        }
    };

    const handleDateConfirm = (date) => {
        setTaskDate(moment(date).format('YYYY-MM-DD'));
        setDatePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        setTaskTime(moment(time).format('HH:mm'));
        setTimePickerVisibility(false);
    };

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={closeModal}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Close Button */}
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Icon name="close-circle" size={30} color="#333" />
                    </TouchableOpacity>

                    {/* Title */}
                    <Text style={styles.modalTitle}>Add Task</Text>

                    {/* Input and Actions */}
                    <View style={styles.formGroup}>
                        <TextInput
                            style={styles.input}
                            value={taskName}
                            onChangeText={setTaskName}
                            placeholder="Enter task name"
                        />
                        <View style={styles.row}>
                            <Button
                                title={taskDate ? `Date: ${taskDate}` : 'Select Date'}
                                onPress={() => setDatePickerVisibility(true)}
                                color="#3498db"
                                style={{ flex: 1, marginRight: 8 }}
                            />
                            <Button
                                title={taskTime ? `Time: ${taskTime}` : 'Select Time'}
                                onPress={() => setTimePickerVisibility(true)}
                                color="#3498db"
                                style={{ flex: 1, marginLeft: 8 }}
                            />
                        </View>
                    </View>

                    {/* Submit Button */}
                    <Button
                        title="Add Task"
                        onPress={handleAddTask}
                        color="#2ecc71"
                        style={{ marginTop: 20 }}
                    />
                </View>

                {/* Date Picker */}
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={() => setDatePickerVisibility(false)}
                />

                {/* Time Picker */}
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={() => setTimePickerVisibility(false)}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        width: '85%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#34495e',
    },
    formGroup: {
        width: '100%',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 6,
        backgroundColor: '#f9f9f9',
        marginBottom: 15,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default AddTaskModal;
