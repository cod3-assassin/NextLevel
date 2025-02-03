import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using MaterialIcons from react-native-vector-icons

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            {/* Notification Setting */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Icon name="notifications" size={24} color="#3498db" />
                    <Text style={styles.cardTitle}>Enable Notifications</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            {/* Other Settings */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Other Settings</Text>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="security" size={24} color="#f39c12" />
                    <Text style={styles.settingText}>Manage Permissions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="language" size={24} color="#3498db" />
                    <Text style={styles.settingText}>Change Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="info" size={24} color="#2ecc71" />
                    <Text style={styles.settingText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="help-outline" size={24} color="#3498db" />
                    <Text style={styles.settingText}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="privacy-tip" size={24} color="#3498db" />
                    <Text style={styles.settingText}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Account Management</Text>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="exit-to-app" size={24} color="#3498db" />
                    <Text style={styles.settingText}>Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="delete" size={24} color="#e74c3c" />
                    <Text style={styles.settingText}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#f7f7f7',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        elevation: 5, // Shadow effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#333',
    },
    settingText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
        textDecorationLine: 'underline', // Add underline for clickable text
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default SettingsScreen;
