import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomNav = () => {
    const navigate = useNavigation();
    const insets = useSafeAreaInsets();

    const handleNavigate = (screenName) => {
        navigate.navigate(screenName)
    }

    return (
        <View style={[styles.botNav, { paddingBottom: insets.bottom || 10 }]}>
            <Pressable onPress={() => { handleNavigate("rooms") }}>
                <View style={styles.iconView}>
                    <Icon name="search" size={28} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
                    <Text style={styles.navFont}>Search</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => { handleNavigate("wishlist") }}>
                <View style={styles.iconView}>
                    <Icon3 name="favorite-border" size={28} style={{ fontWeight: "200", color: "rgb(141, 141, 141)" }} />
                    <Text style={styles.navFont}>Wishlists</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => { handleNavigate("trips") }}>
                <View style={styles.iconView}>
                    <Icon2 name="airbnb" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                    <Text style={styles.navFont}>Trips</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => { handleNavigate("messages") }}>
                <View style={styles.iconView}>
                    <Icon4 name="message-outline" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                    <Text style={styles.navFont}>Message</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => { handleNavigate("profile") }}>
                <View style={styles.iconView}>
                    <Icon5 name="person-circle-outline" size={28} style={{ fontWeight: "100", color: "rgb(141, 141, 141)" }} />
                    <Text style={styles.navFont}>Profile</Text>
                </View>
            </Pressable>
        </View>
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
        paddingHorizontal: 20,
        bottom:-60
    },
    iconView: {
        paddingVertical: 7,
        paddingHorizontal: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    },
    navFont: {
        fontWeight: "200",
        color: "rgb(141, 141, 141)",
        fontSize: 12,
    },
});
