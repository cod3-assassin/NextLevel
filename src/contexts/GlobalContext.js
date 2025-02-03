import React from 'react';
import { DailyRoutineContextProvider } from './DailyRoutineContext'; // Import the DailyRoutineContextProvider
import { TaskProvider } from './TaskContext'; // You can add other context providers here

export const GlobalContextProvider = ({ children }) => {
    return (
        <TaskProvider>
            <DailyRoutineContextProvider>
                {/* Add more providers if needed */}
                {children}
            </DailyRoutineContextProvider>
        </TaskProvider>
    );
};
