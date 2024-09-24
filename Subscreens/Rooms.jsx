import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { poolsDummyData } from '../Data/pools';
import RoomCard from '../components/RoomCard';
import PoolCard from '../components/PoolCard';
import { hotelDummyData } from '../Data/hotels';
import useDebounce from '../hooks/useDebounce';
import ThreeDotsLoading from '../components/ThreeDotsLoading';
import { useSelector } from 'react-redux';

const Rooms = ({ inputVal, setInputVal,icons, setIcons }) => {


  const [data, setData] = useState(hotelDummyData);

  // useEffect(() => {
  //   const filteredHotels = hotelDummyData.filter(hotel => hotel.name.toLowerCase().includes(inputVal));
  //   setData(filteredHotels);
  // },[inputVal])



  // useEffect(() => {
  //   const delayDebounceFnc = setTimeout(() => {
  //     const filteredHotels = hotelDummyData.filter(hotel =>
  //       hotel.name.toLowerCase().includes(inputVal.toLowerCase())
  //     );
  //     setData(filteredHotels);
  //   }, 2000); 

  //   return () => clearTimeout(delayDebounceFnc);
  // }, [inputVal]);

  const [loading, setLoading] = useState(false);


  const filterHotels = () => {
    if (inputVal.trim() === '') {
      setData(hotelDummyData);
    } else {
      const filtered = data.filter(hotel =>
        hotel.name.toLowerCase().includes(inputVal.toLowerCase())
      );
      setData(filtered);
    }
  };


  useDebounce(filterHotels, 1500, [inputVal],setLoading);



  const renderCards = (itemData) => {
    const item = itemData.item;
    return <RoomCard item={item} icons={icons} setIcons={setIcons} />
  }


  return (
    <View style={styles.homeCount}>
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