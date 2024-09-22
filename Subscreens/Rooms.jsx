import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { poolsDummyData } from '../Data/pools';
import RoomCard from '../components/RoomCard';
import PoolCard from '../components/PoolCard';
import { hotelDummyData } from '../Data/hotels';

const Rooms = () => {
  const data = hotelDummyData;

  const renderCards = (itemData) => {
    const item = itemData.item;
    return <RoomCard item={item} />
  }
  return (
    <View style={styles.homeCount}>
      <FlatList
      showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 18 }}
        data={data}
        key={item => item.name}
        renderItem={renderCards}
      />
    </View>
  )
}

export default Rooms

const styles = StyleSheet.create({
  homeCount: {
    // flex:1,
    height: "100%"
  }
})