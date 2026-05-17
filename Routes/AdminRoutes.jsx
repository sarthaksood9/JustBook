import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AdminHome from '../screens/AdminHome';
import MenuItems from '../AdminScreens/MenuItems';
import Today from '../AdminScreens/Today';
import Calander from '../AdminScreens/Calander';
import Messages from '../AdminScreens/Messages';
import Listing from '../AdminScreens/Listing';

const Stack = createStackNavigator();

const AdminRoutes = () => {
    return (
        <View style={styles.main}>
            <Stack.Navigator>
                <Stack.Screen
                    name="today"
                    component={Today}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="calander"
                    component={Calander}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="listing"
                    component={Listing}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="messages"
                    component={Messages}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="menu"
                    component={MenuItems}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default AdminRoutes

const styles = StyleSheet.create({
    main: {
        position: "relative",
        flex: 1,
        backgroundColor: "white",
        marginBottom: -30
    },
})