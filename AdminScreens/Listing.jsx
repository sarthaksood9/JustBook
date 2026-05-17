import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { hotelDummyData } from '../Data/hotels';
import RoomCard from '../components/RoomCard';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Listing = () => {


  const navigate = useNavigation();


  const [data, setData] = useState(hotelDummyData);
  const renderCards = (itemData) => {
    const item = itemData.item;
    return <RoomCard item={item} />
  }


  return (
    <View style={styles.cont}>
      <View style={styles.iconView}>
        <AntDesign style={styles.icon} name="plus" size={26} color="black" />
      </View>
      <View style={styles.headView}>
        <Text style={styles.heading}>Your listing</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        // style={{ marginHorizontal: 18 }}
        data={data}
        key={item => item.name}
        renderItem={renderCards}
      />
    </View>
  )
}

export default Listing

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 21,
    paddingTop: 52,
    position: "relative"
  },
  iconView:{
    backgroundColor: "rgb(237, 237, 237)",
    borderRadius: 50,
    padding: 7,
    position: "absolute",
    right:25,
    top:8
  },
  icon: {
    
  },
  headView: {
    paddingBottom: 16,

  },
  heading: {
    fontSize: 30,
    fontWeight: "600"
  },
})