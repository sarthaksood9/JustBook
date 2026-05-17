import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Rooms from '../Subscreens/Rooms';
import Pools from '../Subscreens/Pools';
import Farms from '../screens/Farms';
import Beach from '../screens/Beach';
import Golf from '../screens/Golf';
import WishList from '../screens/WishList';
import Trips from '../screens/Trips';
import Message from '../screens/Message';
import Profile from '../screens/Profile';
import ProductCard from '../screens/ProductCard';
import RecentVisit from '../screens/RecentVisit';
import WishView from '../screens/WishView';
import ReserveRoomWithHookForm from '../screens/ReserveRoomWithHookForm';

const Stack = createStackNavigator();

const UserRoutes = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen
        name="rooms"
        component={Rooms}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pools"
        component={Pools}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="farms"
        component={Farms}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="beach"
        component={Beach}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="golf"
        component={Golf}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productcard"
        component={ProductCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="reserveroom"
        component={ReserveRoomWithHookForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wishlist"
        component={WishList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wishview"
        component={WishView}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="recentvisit"
        component={RecentVisit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="trips"
        component={Trips}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="messages"
        component={Message}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserRoutes;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
