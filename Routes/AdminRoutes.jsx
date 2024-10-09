import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AdminHome from '../screens/AdminHome';
import AdminBottomNav from '../components/AdminBottomNav';
import { UserContext } from '../context/UserContext';
import MenuItems from '../AdminScreens/MenuItems';

const Stack = createStackNavigator();

const AdminRoutes = ({isAdmin, setIsAdmin ,icons, setIcons}) => {

    const user = useContext(UserContext);

    // console.log(user);

    // setIcons("admin");
    // setIsAdmin("admin")
    return (
        <View style={styles.main}>
            <Stack.Navigator>
                <Stack.Screen name="admin" component={AdminHome} options={{ headerShown: false }} />
                <Stack.Screen name="menu" component={MenuItems} options={{ headerShown: false }} />
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