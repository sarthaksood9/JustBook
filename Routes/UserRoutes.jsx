
import { StyleSheet, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Search from '../components/Search';
import UpperNav from '../components/UpperNav';
import ProductCard from '../screens/ProductCard';
import RecentVisit from '../screens/RecentVisit';
import WishView from '../screens/WishView';
import WishList from '../screens/WishList';
import Pools from '../Subscreens/Pools';
import Rooms from '../Subscreens/Rooms';
import { createStackNavigator } from '@react-navigation/stack';
import Trips from '../screens/Trips';
import Message from '../screens/Message';
import Profile from '../screens/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, setUser } from '../redux/User/actions';
import { UserContext } from '../context/UserContext';
// import Search from './components/Search';
// import UpperNav from './components/UpperNav';
// import Rooms from './Subscreens/Rooms';
// import Pools from './Subscreens/Pools';
// import Trips from '../screens/Trips';
// import Message from './screens/Message';
// import Profile from './screens/Profile';
// import WishList from './screens/WishList';
// import ProductCard from './screens/ProductCard';
// import RecentVisit from './screens/RecentVisit';
// import WishView from './screens/WishView';
// import UserRoutes from './Routes/UserRoutes';

const Stack = createStackNavigator();

const UserRoutes = ({ icons, setIcons }) => {

    const {logOut,users}=useContext(UserContext);

    console.log(users)
    // logOut();



    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    });


    const [inputVal, setInputVal] = useState("");

    const RenderRooms = () => {
        return <Rooms inputVal={inputVal} setInputVal={setInputVal} icons={icons} setIcons={setIcons} />
    }
    const RenderPools = () => {
        return <Pools inputVal={inputVal} setInputVal={setInputVal} icons={icons} setIcons={setIcons} />
    }
    const RenderWishListScreen = () => {
        return <WishList icons={icons} setIcons={setIcons} />
    }
    const RenderWishListViewScreen = () => {
        return <WishView icons={icons} setIcons={setIcons} />
    }
    const RenderRecentVisitScreen = () => {
        return <RecentVisit icons={icons} setIcons={setIcons} />
    }
    const RenderProductCard = () => {
        return <ProductCard icons={icons} setIcons={setIcons} />
    }

    return (
        <View style={styles.main}>
            {(icons === "rooms" || icons === "pools" && icons !== "productcard") && <View style={styles.upperNavView}>
                <Search inputVal={inputVal} setInputVal={setInputVal} />
                <UpperNav icons={icons} setIcons={setIcons} />
            </View>}
            <Stack.Navigator>
                <Stack.Screen name="rooms" component={RenderRooms} options={{ headerShown: false }} />
                <Stack.Screen name="pools" component={RenderPools} options={{ headerShown: false }} />
                <Stack.Screen name="wishlist" component={RenderWishListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="trips" component={Trips} options={{ headerShown: false }} />
                <Stack.Screen name="message" component={Message} options={{ headerShown: false }} />
                <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="productcard" component={RenderProductCard} options={{ headerShown: false }} />
                <Stack.Screen name="recentvisit" component={RenderRecentVisitScreen} options={{ headerShown: false }} />
                <Stack.Screen name="wishview" component={RenderWishListViewScreen} options={{ headerShown: false, animationEnabled: false }} />
            </Stack.Navigator>
        </View>

    )
}

export default UserRoutes

const styles = StyleSheet.create({
    main: {
        // marginTop: 52,
        position: "relative",
        flex: 1,
        backgroundColor: "white",
        marginBottom: -30
    },
})