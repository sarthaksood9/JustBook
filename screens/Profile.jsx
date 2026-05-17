import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import LogScreen from './LogScreen'
import { UserContext } from '../context/UserContext'
import ProfileScreen from './ProfileScreen'

const Profile = () => {
  const { user } = useContext(UserContext);

  const isUserLoggedIn = user?.profile?.phone;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isUserLoggedIn ? <ProfileScreen /> : <LogScreen />}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
