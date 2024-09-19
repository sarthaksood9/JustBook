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
import BottomNav from './components/BottomNav';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [icons,setIcons]=useState("rooms")
  return (

    <NavigationContainer independent={true}>
      <View style={styles.main}>
        <View style={styles.upperNavView}>
          <Search />
          <UpperNav icons={icons} setIcons={setIcons} />
        </View>
        <Stack.Navigator>
          <Stack.Screen name="rooms" component={Rooms} options={{ headerShown: false }} />
          <Stack.Screen name="pools" component={Pools} options={{ headerShown: false }} />
        </Stack.Navigator>
        <BottomNav />
      </View>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  
  main: {
    marginVertical: 8,
    marginVertical: 52,
    position: "relative",
    flex:1
  },
  upperNavView: {
    elevation: 2,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    paddingTop: 15
  },


  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: "100%",
  //   position: "relative"
  //   // fontFamily: 'Inter_400Regular'
  // },
});
