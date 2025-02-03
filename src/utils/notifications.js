// src/utils/notifications.js
import PushNotification from 'react-native-push-notification';

export const scheduleNotification = (title, message, date) => {
    PushNotification.localNotificationSchedule({
        title,
        message,
        date,
        allowWhileIdle: true,
    });
};
