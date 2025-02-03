// src/contexts/TaskCompletionContext.js
import React, { createContext, useState, useContext } from 'react';

const TaskCompletionContext = createContext();

export const useTaskCompletion = () => {
    return useContext(TaskCompletionContext);
};

export const TaskCompletionProvider = ({ children }) => {
    const [taskCompletion, setTaskCompletion] = useState({
        prayers: { Fajr: 'Not Completed', Dhuhr: 'Not Completed', Asr: 'Not Completed', Maghrib: 'Not Completed', Isha: 'Not Completed' },
        learning: 'Not Completed',
        companyWork: 'Not Completed',
        sleep: 'Not Completed',
        water: 'Not Completed',
    });

    const markAsCompleted = (task, subtask) => {
        setTaskCompletion((prevState) => ({
            ...prevState,
            [task]: task === 'prayers' ? { ...prevState[task], [subtask]: 'Completed' } : 'Completed',
        }));
    };

    return (
        <TaskCompletionContext.Provider value={{ taskCompletion, markAsCompleted }}>
            {children}
        </TaskCompletionContext.Provider>
    );
};
