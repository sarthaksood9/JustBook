import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './components/BottomNav';
import { useContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/WishList/store';
import { SafeAreaView } from 'react-native';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminBottomNav from './components/AdminBottomNav';
import { UserContext } from './context/UserContext';
import { set_device_info } from './utils/device';


export default function SemiApp() {

    const user = useContext(UserContext);
    const [icons, setIcons] = useState("rooms")
    const [isAdmin, setIsAdmin] = useState(user?.user?.isAdmin);


    // const { height, width } = useWindowDimensions();

    // useEffect(() => {
	// 	set_device_info({ width, height });
	// }, [height, width]);


    // user.logOut();


    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer independent={true}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <View style={styles.container}>

                        {user?.user?.isAdmin !== "admin" ? <UserRoutes isAdmin={isAdmin} setIsAdmin={setIsAdmin} setIcons={setIcons} icons={icons} /> : <AdminRoutes isAdmin={isAdmin} setIsAdmin={setIsAdmin} icons={icons} setIcons={setIcons} />}

                        {/* Bottom Navigation bat */}

                        {user?.user?.isAdmin === "admin" ? (<AdminBottomNav icons={icons} setIcons={setIcons} />) : ((icons !== "productcard") && <BottomNav icons={icons} setIcons={setIcons} />)}


                        {/* <BottomNav icons={icons} setIcons={setIcons} /> */}

                    </View>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({

    main: {
        // marginTop: 52,
        position: "relative",
        flex: 1,
        backgroundColor: "white",
        marginBottom: -30
    },
    upperNavView: {
        elevation: 2,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        paddingTop: 15
    },


    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: "relative"
    },
});