import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AdminHome from '../screens/AdminHome';

const Stack = createStackNavigator();

const AdminRoutes = () => {
    return (
        <View style={styles.main}>
            <Stack.Navigator>
                <Stack.Screen name="admin" component={AdminHome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default AdminRoutes

const styles = StyleSheet.create({
    main: {
        // marginTop: 52,
        position: "relative",
        flex: 1,
        backgroundColor: "white",
        marginBottom: -30
    },
})