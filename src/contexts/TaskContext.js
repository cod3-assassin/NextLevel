import React, { createContext, useState, useEffect, useContext } from 'react';
import { getDataFromLocalStorage, storeDataInLocalStorage } from '../utils/storage'; // Assuming these utility functions handle AsyncStorage

const TaskContext = createContext({
    tasks: [],
    addTask: () => { },
    removeTask: () => { }
});

export const useTasks = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from AsyncStorage on initial load
    useEffect(() => {
        const fetchStoredTasks = async () => {
            const storedTasks = await getDataFromLocalStorage('tasks');
            if (storedTasks) {
                setTasks(storedTasks);
            }
        };

        fetchStoredTasks();
    }, []);

    // Store tasks in AsyncStorage whenever tasks change
    useEffect(() => {
        if (tasks.length > 0) {
            storeDataInLocalStorage('tasks', tasks);
        }
    }, [tasks]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
