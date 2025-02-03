import React, { createContext, useContext, useState, useEffect } from 'react';

const HomeScreenContext = createContext();

export const HomeScreenContextProvider = ({ children }) => {
    const [taskCompletion, setTaskCompletion] = useState({
        prayers: {
            Fajr: 'Not Completed',
            Dhuhr: 'Not Completed',
            Asr: 'Not Completed',
            Maghrib: 'Not Completed',
            Isha: 'Not Completed',
        },
        learning: 'Not Completed',
        companyWork: 'Not Completed',
        sleep: 'Not Completed',
        water: 'Not Completed',
    });

    useEffect(() => {
        // Retrieve task completion data from local storage on app load
        const getStoredData = async () => {
            const storedData = await getDataFromLocalStorage('taskCompletion');
            if (storedData) {
                setTaskCompletion(storedData);
            }
        };

        getStoredData();
    }, []);

    const updateTaskCompletion = (task, status) => {
        setTaskCompletion((prevState) => {
            const updatedState = { ...prevState };
            if (task === 'prayers') {
                updatedState.prayers = { ...updatedState.prayers, [status]: 'Completed' };
            } else {
                updatedState[task] = status;
            }
            return updatedState;
        });
    };

    return (
        <HomeScreenContext.Provider value={{ taskCompletion, updateTaskCompletion }}>
            {children}
        </HomeScreenContext.Provider>
    );
};

export const useHomeScreenContext = () => {
    return useContext(HomeScreenContext);
};
