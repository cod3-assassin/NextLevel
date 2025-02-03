import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDataFromLocalStorage, storeDataInLocalStorage } from '../utils/storage';

const DailyRoutineContext = createContext();

export const DailyRoutineContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchStoredData = async () => {
            const storedData = await getDataFromLocalStorage('dailyTasks');
            if (storedData) {
                setTasks(storedData);
            }
        };
        fetchStoredData();
    }, []);

    const addTask = (taskName, subtasks = []) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks, { id: Date.now(), name: taskName, completed: false, subtasks }];
            storeDataInLocalStorage('dailyTasks', updatedTasks);
            return updatedTasks;
        });
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            );
            storeDataInLocalStorage('dailyTasks', updatedTasks);
            return updatedTasks;
        });
    };

    const toggleSubtaskCompletion = (taskId, subtaskIndex) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) => {
                if (task.id === taskId) {
                    const updatedSubtasks = [...task.subtasks];
                    updatedSubtasks[subtaskIndex].completed = !updatedSubtasks[subtaskIndex].completed;
                    return { ...task, subtasks: updatedSubtasks };
                }
                return task;
            });
            storeDataInLocalStorage('dailyTasks', updatedTasks);
            return updatedTasks;
        });
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
            storeDataInLocalStorage('dailyTasks', updatedTasks);
            return updatedTasks;
        });
    };

    return (
        <DailyRoutineContext.Provider value={{ tasks, addTask, toggleTaskCompletion, toggleSubtaskCompletion, removeTask }}>
            {children}
        </DailyRoutineContext.Provider>
    );
};

export const useDailyRoutineContext = () => {
    return useContext(DailyRoutineContext);
};
