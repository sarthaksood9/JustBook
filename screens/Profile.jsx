import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import LogScreen from './LogScreen'
import { UserContext } from '../context/UserContext'
import ProfileScreen from './ProfileScreen'


const Profile = () => {

  const user = useContext(UserContext);

  return (

    <View style={{
      flex: 1,
      // backgroundColor: "white",
      backgroundColor:"blue",
      // height:1000
      
    }}>
      {user?.user?.phoneNum === "9518849040" ? <ProfileScreen /> : <LogScreen />}
    </View>



  )
}

export default Profile

const styles = StyleSheet.create({})