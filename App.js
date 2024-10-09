import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './components/BottomNav';
import { useContext, useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/WishList/store';
import { SafeAreaView } from 'react-native';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import { UserContext, UserProvider } from './context/UserContext';
import AdminBottomNav from './components/AdminBottomNav';
import SemiApp from './SemiApp';
// import { UserContext } from './context/userContext';


// This is new change



export default function App() {

  return (
    <UserProvider>
      <SemiApp/>
    </UserProvider>

  );
}

