import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CountryDrower from '../components/SignUpDrower'
import SignUpDrower from '../components/SignUpDrower'
// import LoginScreen from './LoginScreen'

const Message = () => {
  return (
    <View>
      {/* <LoginScreen/>      */}
      {/* <Text>message</Text> */}
      <SignUpDrower/>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})