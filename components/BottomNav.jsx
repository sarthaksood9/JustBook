import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';

const BottomNav = () => {
    return (
        <View style={styles.botNav}>
            <View style={[styles.iconView,]}>
                <Icon name="search" size={28} style={{ fontWeight: "bold", color: "red" }} />
                <Text style={[styles.navFont, { color: "red" }]}>Search</Text>
            </View>
            <View style={styles.iconView}>
                <Icon3 name="favorite-border" size={28} style={{ fontWeight: "200", color: "rgb(141, 141, 141)" }} />
                <Text style={styles.navFont}> Wishlists</Text>
            </View>
            <View style={styles.iconView}>
                <Icon2 name="airbnb" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                <Text style={styles.navFont}>Trips</Text>
            </View>
            <View style={styles.iconView}>
                <Icon4 name="message-outline" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                <Text style={styles.navFont}>Message</Text>
            </View>
            <View style={styles.iconView}>
                <Icon5 name="person-circle-outline" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                <Text style={styles.navFont}>Profile</Text>
            </View>
        </View>

    )
}

export default BottomNav

const styles = StyleSheet.create({
    botNav: {
        position: "absolute",
        bottom: -49,
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