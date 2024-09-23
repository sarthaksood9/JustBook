import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BottomNav = ({ setIcons, icons }) => {
    const navigate = useNavigation();

    const currentRoute = icons;
    const cc = navigate.getCurrentRoute()?.name;


    const hendleNavigateRooms = (name) => {
        navigate.navigate(name)
        setIcons(name)
    }

    return (
        <View style={styles.botNav}>
            <Pressable onPress={() => { hendleNavigateRooms("rooms") }}>
                <View style={[styles.iconView,]}>
                    <Icon name="search" size={28} style={{ fontWeight: "bold", color: currentRoute === "rooms" || currentRoute === "pools"  ?"red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont,{ fontWeight: "200", color: currentRoute === "rooms" || currentRoute === "pools" ?"red" : "rgb(141, 141, 141)" }]}>Search</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("wishlist") }}>
                <View style={styles.iconView}>
                    <Icon3 name="favorite-border" size={28} style={{ fontWeight: "200", color: currentRoute === "wishlist" ?"red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont,{ fontWeight: "200", color: currentRoute === "wishlist" ?"red" : "rgb(141, 141, 141)" }]}> Wishlists</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("trips") }}>
                <View style={styles.iconView}>
                    <Icon2 name="airbnb" size={28} style={{ fontWeight: "100", color: currentRoute === "trips"?"red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont,{ fontWeight: "200", color: currentRoute === "trips" ?"red" : "rgb(141, 141, 141)" }]}>Trips</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { hendleNavigateRooms("message") }}>
                <View style={styles.iconView}>
                    <Icon4 name="message-outline" size={28} style={{ fontWeight: "100", color: currentRoute === "message"?"red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont,{ fontWeight: "200", color: currentRoute === "message" ?"red" : "rgb(141, 141, 141)" }]}>Message</Text>
                </View>
            </Pressable >
            <Pressable onPress={() => { hendleNavigateRooms("profile") }}>
                <View style={styles.iconView}>
                    <Icon5 name="person-circle-outline" size={28} style={{ fontWeight: "100", color: currentRoute === "profile"?"red" : "rgb(141, 141, 141)" }} />
                    <Text style={[styles.navFont,{ fontWeight: "200", color: currentRoute === "profile" ?"red" : "rgb(141, 141, 141)" }]}>Profile</Text>
                </View>
            </Pressable>
        </View >

    )
}

export default BottomNav

const styles = StyleSheet.create({
    botNav: {
        position: "absolute",
        bottom: 0,
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