import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabBtn from '../Common/Compo/TabBtn'

const Calander = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.headView}>
        <Text style={styles.heading}>Calendar</Text>
      </View>
      
      <View style={styles.infoView}>
        <Text style={styles.infoText}>When you publish a listing you'll be able to see and edit your canlendar here.</Text>
      </View>

      <TabBtn w={40} mt={28} pv={15} ph={2} text={"Refresh"}/>
    </View>
  )
}

export default Calander

const styles = StyleSheet.create({
    cont:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        paddingHorizontal:31,
        paddingTop:52
    },
    headView:{
        paddingBottom:35,
        
    },
    heading:{
        fontSize:35,
        fontWeight:"600"
    },
    infoView:{
        // fontSize:35,
        // fontWeight:"600"
        borderBottomColor:"gray",
        borderBottomWidth:0.4
    },
    infoText:{
        fontSize:17,
        fontWeight:"thin",
        color:"rgb(75, 75, 75)",
        // fontWeight:"600"
        paddingBottom:20
    }


})