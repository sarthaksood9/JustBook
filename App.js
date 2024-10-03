import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './components/BottomNav';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/WishList/store';
import { SafeAreaView } from 'react-native';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';




export default function App() {

  const [icons, setIcons] = useState("rooms")
  const [isAdmin, setIsAdmin] = useState("user");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.container}>

            {isAdmin === "user" ? <UserRoutes setIcons={setIcons} icons={icons} /> : <AdminRoutes />}

            {/* Bottom Navigation bat */}

            {(icons !== "productcard") && <BottomNav icons={icons} setIcons={setIcons} />}
            {/* <BottomNav icons={icons} setIcons={setIcons} /> */}
      
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
