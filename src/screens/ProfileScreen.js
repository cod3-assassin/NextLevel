import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>

            {/* Profile Picture Section */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                        style={styles.profilePicture}
                    />
                    <Text style={styles.cardTitle}>John Doe</Text>
                </View>

                <View style={styles.profileInfo}>
                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Email:</Text>
                        <Text style={styles.profileData}>johndoe@example.com</Text>
                    </View>

                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Mobile:</Text>
                        <Text style={styles.profileData}>+1 123 456 7890</Text>
                    </View>

                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Blood Group:</Text>
                        <Text style={styles.profileData}>O+</Text>
                    </View>

                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Hobbies:</Text>
                        <Text style={styles.profileData}>Reading, Traveling, Coding</Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Weight:</Text>
                        <Text style={styles.profileData}>70KG</Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Height:</Text>
                        <Text style={styles.profileData}>175cm</Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.profileLabel}>Profession:</Text>
                        <Text style={styles.profileData}>SDE</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Account Management Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Account Management</Text>

                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="delete" size={24} color="#e74c3c" />
                    <Text style={styles.cardText}>Delete Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="exit-to-app" size={24} color="#3498db" />
                    <Text style={styles.cardText}>Log Out</Text>
                </TouchableOpacity>
            </View>

            {/* Additional Settings Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Settings</Text>

                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="help-outline" size={24} color="#3498db" />
                    <Text style={styles.cardText}>FAQ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingRow}>
                    <Icon name="security" size={24} color="#3498db" />
                    <Text style={styles.cardText}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 55 }}></View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#f7f7f7',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        elevation: 5, // Shadow effect for a modern feel
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginHorizontal: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#3498db', // Blue border for the profile picture
    },
    cardTitle: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#333',
    },
    profileInfo: {
        marginTop: 15,
    },
    profileRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    profileLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    profileData: {
        fontSize: 16,
        color: '#333', // Darker color for better readability
    },
    editText: {
        fontSize: 16,
        color: '#3498db',
        textDecorationLine: 'underline',
        marginTop: 15,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    cardText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 12,
    },
});

export default ProfileScreen;
