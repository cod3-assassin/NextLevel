import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data in local storage
export const storeDataInLocalStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log(`Data stored successfully for key: ${key}`);
    } catch (error) {
        console.error('Error storing data', error);
    }
};

// Get data from local storage
export const getDataFromLocalStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log(`Data retrieved for key: ${key}`, value);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error retrieving data', error);
        return null;
    }
};

// Remove data from local storage (optional utility)
export const removeDataFromLocalStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log(`Data removed for key: ${key}`);
    } catch (error) {
        console.error('Error removing data', error);
    }
};
