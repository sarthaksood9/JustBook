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
import { useState } from 'react';
import WishList from './screens/WishList';
import ProductCard from './screens/ProductCard';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [icons, setIcons] = useState("rooms")

  const [inputVal, setInputVal] = useState("");

  const RenderRooms=()=>{
    return <Rooms inputVal={inputVal} setInputVal={setInputVal} icons={icons} setIcons={setIcons} />
  }
  const RenderPools=()=>{
    return <Pools inputVal={inputVal} setInputVal={setInputVal} icons={icons} setIcons={setIcons} />
  }
  const RenderProductCard=()=>{
    return <ProductCard icons={icons} setIcons={setIcons} />
  }

  return (
    <NavigationContainer independent={true}>
      <StatusBar style='dark'></StatusBar>
      <View style={styles.container}>
        <View style={styles.main}>
          {(icons === "rooms" || icons === "pools" && icons !== "productcard") && <View style={styles.upperNavView}>
            <Search inputVal={inputVal} setInputVal={setInputVal} />
            <UpperNav icons={icons} setIcons={setIcons} />
          </View>}
          <Stack.Navigator>
            <Stack.Screen name="rooms" component={RenderRooms} options={{ headerShown: false }} />
            <Stack.Screen name="pools" component={RenderPools} options={{ headerShown: false }} />
            <Stack.Screen name="wishlist" component={WishList} options={{ headerShown: false }} />
            <Stack.Screen name="trips" component={Trips} options={{ headerShown: false }} />
            <Stack.Screen name="message" component={Message} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="productcard" component={RenderProductCard} options={{ headerShown: false }} />
          </Stack.Navigator>
        </View>
         <BottomNav icons={icons} setIcons={setIcons} />
        {/* {(icons !== "productcard") && <BottomNav icons={icons} setIcons={setIcons} />} */}
      </View>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

  main: {
    marginVertical: 52,
    position: "relative",
    flex: 1,
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
