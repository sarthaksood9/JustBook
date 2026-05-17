import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { poolsDummyData } from '../Data/pools';
import RoomCard from '../components/RoomCard';
import PoolCard from '../components/PoolCard';
import { hotelDummyData } from '../Data/hotels';
import useDebounce from '../hooks/useDebounce';
import ThreeDotsLoading from '../components/ThreeDotsLoading';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import UpperNav from '../components/UpperNav';

const Rooms = () => {
  const [data, setData] = useState(hotelDummyData);
  const [loading, setLoading] = useState(true);



  



  const route="rooms"

  const renderCards = (itemData) => {
    const item = itemData.item;
    return <RoomCard route={route} item={item} />
  }


  return (
    <View style={styles.homeCount}>
      <Search />
      <UpperNav />
      {!loading?<ThreeDotsLoading/>:<FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 18 }}
        data={data}
        key={item => item.name}
        renderItem={renderCards}
      />}
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