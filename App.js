import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Search from './components/Search';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import UpperNav from './components/UpperNav';
import Rooms from './Subscreens/Rooms';
import Pools from './Subscreens/Pools';
import Trips from './screens/Trips';
import Message from './screens/Message';
import Profile from './screens/Profile';
import WhishList from './screens/WishList';
import BottomNav from './components/BottomNav';
import { useEffect, useState } from 'react';
import WishList from './screens/WishList';
import ProductCard from './screens/ProductCard';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/WishList/store';
import RecentVisit from './screens/RecentVisit';
import WishView from './screens/WishView';
import { SafeAreaView } from 'react-native';
import BottomDrowr from './components/BottomDrowr';
import { loadInitialState } from './redux/recentVisit/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadInitialRecents } from './redux/recentVisit/actions';

const Stack = createStackNavigator();

export default function App() {

  

  const item = {
    name: "sarthak",
    room: "booked"
  }


  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [icons, setIcons] = useState("rooms")

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
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.container}>
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
            {/* <BottomNav icons={icons} setIcons={setIcons} /> */}
            {(icons !== "productcard") && <BottomNav icons={icons} setIcons={setIcons} />}

          </View>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>

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
