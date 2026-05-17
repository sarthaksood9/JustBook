import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AdminBottomNav = () => {
    const navigate = useNavigation();
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const currentRoute = route.name;

    const hendleNavigateRooms = (name) => {
        navigate.navigate(name)
    }

    return (
        <View style={[styles.botNav, { bottom: insets.bottom }]}>
            <Pressable onPress={() => { hendleNavigateRooms("today") }}>
                <View style={[styles.iconView,]}>
                    <Ionicons name="home-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "today" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "today"  ? "red" : "rgb(141, 141, 141)" }]}>Today</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("calander") }}>
                <View style={styles.iconView}>
                <Ionicons name="calendar-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "calander" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "calander" ? "red" : "rgb(141, 141, 141)" }]}> Calendar</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("listing") }}>
                <View style={styles.iconView}>
                <MaterialCommunityIcons name="home-roof" size={24} style={{ fontWeight: "bold", color: currentRoute === "listing" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "listing" ? "red" : "rgb(141, 141, 141)" }]}>Listings</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("messages") }}>
                <View style={styles.iconView}>
                <MaterialCommunityIcons name="message-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "messages" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "messages" ? "red" : "rgb(141, 141, 141)" }]}>Message</Text>
                </View>
            </Pressable >
            <Pressable onPress={() => { hendleNavigateRooms("menu") }}>
                <View style={styles.iconView}>
                <Ionicons name="menu" size={24} style={{ fontWeight: "bold", color: currentRoute === "menu" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "menu" ? "red" : "rgb(141, 141, 141)" }]}>Profile</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default AdminBottomNav

const styles = StyleSheet.create({
    botNav: {
        // position: "absolute",
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "100%",
        borderTopColor: "black",
        borderTopWidth: 0.2,
        shadowColor: "black",
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "",
        paddingHorizontal: 20,
        bottom:100

    },
    iconView: {
        paddingVertical: 7,
        paddingHorizontal: 5,
        paddingBottom: 25,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
    },
    navFont: {
        fontWeight: "400",
        color: "rgb(141, 141, 141)",
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
    }
})