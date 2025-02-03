import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Replace with appropriate import

const ActivityCards = ({ activityData }) => {
    return (
        <View style={styles.activityContainer}>
            {activityData.map((activity, index) => (
                <View key={index} style={styles.activity}>
                    <View style={styles.activityHeader}>
                        <Text style={styles.activityTitle}>{activity.title}</Text>
                        <Text style={styles.activityTime}>{activity.time}</Text>
                    </View>
                    <View style={styles.activityDetails}>
                        {activity.details.map((detail, index) => (
                            <View key={index} style={styles.activityDetail}>
                                <View style={styles.detailTab}>
                                    <Icon name={detail.icon} size={18} color="#333" style={styles.detailIcon} />
                                    <Text style={styles.activityDetailText}>{detail.label}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    activityContainer: {
        padding: 16,
    },
    activity: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    activityTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    activityTime: {
        fontSize: 14,
        color: '#7f8c8d',
    },
    activityDetails: {
        marginTop: 8,
    },
    activityDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    detailTab: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailIcon: {
        marginRight: 8,
    },
    activityDetailText: {
        fontSize: 14,
    },
});

export default ActivityCards;
