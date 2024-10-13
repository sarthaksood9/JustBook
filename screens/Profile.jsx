import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import LogScreen from './LogScreen'
import { UserContext } from '../context/UserContext'
import ProfileScreen from './ProfileScreen'
import AdminBottomNav from '../components/AdminBottomNav'


const Profile = () => {

  const user = useContext(UserContext);

 


  return (

    <View style={{flex: 1,backgroundColor:"white"}}>
      {user?.user?.user?.role==="user"  ? <ProfileScreen /> : <LogScreen  />}
    </View>



  )
}

export default Profile

const styles = StyleSheet.create({
  
})