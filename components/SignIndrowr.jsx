import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignIndrowr = (modalVisible, setModalVisible, slideAnim) => {

    const closeDrawer = () => {
        Animated.timing(slideAnim, {
            toValue: 900,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start(() => setModalVisible(false));
    };

    return (
        <View >
            <Text style={styles.tt}>SignIndrowr</Text>
        </View>
    )
}

export default SignIndrowr

const styles = StyleSheet.create({
    tt: {
        fontSize: 100
    }
})