import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import LogScreen from './LogScreen'
import { UserContext } from '../context/UserContext'
import ProfileScreen from './ProfileScreen'
import AdminBottomNav from '../components/AdminBottomNav'


const Profile = ({ isAdmin, setIsAdmin }) => {

  const user = useContext(UserContext);



  if (user?.user?.phoneNum === "1234567890") {
    setIsAdmin("user")
  }


  return (

    <View style={{
      flex: 1,
      // backgroundColor: "white",
      backgroundColor: "blue",
      // height:1000

    }}>
      {/* {isAdmin==="user"} */}
      {user?.user?.phoneNum === "9518849040" ? <ProfileScreen /> : <LogScreen isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
    </View>



  )
}

export default Profile

const styles = StyleSheet.create({})