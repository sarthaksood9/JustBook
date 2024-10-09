import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AdminBottomNav = ({setIcons, icons }) => {
    const navigate = useNavigation();

    const currentRoute = icons;
    const cc = navigate.getCurrentRoute()?.name;


    const hendleNavigateRooms = (name) => {
        navigate.navigate(name)
        setIcons(name)
    }

    return (
        <View style={styles.botNav}>
            <Pressable onPress={() => { hendleNavigateRooms("today") }}>
                <View style={[styles.iconView,]}>
                    <Ionicons name="home-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }]}>Today</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("calendar") }}>
                <View style={styles.iconView}>
                <Ionicons name="calendar-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "wishlist" ? "red" : "rgb(141, 141, 141)" }]}> Calendar</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("listings") }}>
                <View style={styles.iconView}>
                <MaterialCommunityIcons name="home-roof" size={24} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "trips" ? "red" : "rgb(141, 141, 141)" }]}>Listings</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("message") }}>
                <View style={styles.iconView}>
                <MaterialCommunityIcons name="message-outline" size={24} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "message" ? "red" : "rgb(141, 141, 141)" }]}>Message</Text>
                </View>
            </Pressable >
            <Pressable onPress={() => { hendleNavigateRooms("profile") }}>
                <View style={styles.iconView}>
                <Ionicons name="menu" size={24} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools" ? "red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont, { fontWeight: "200", color: currentRoute === "profile" ? "red" : "rgb(141, 141, 141)" }]}>Profile</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default AdminBottomNav

const styles = StyleSheet.create({
    botNav: {
        position: "absolute",
        bottom: -30,
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
        paddingHorizontal: 20

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