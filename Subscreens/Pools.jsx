import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { poolsDummyData } from '../Data/pools';
import RoomCard from '../components/RoomCard';
import PoolCard from '../components/PoolCard';

const Pools = ({icons,setIcons} ) => {
  const data = poolsDummyData;

  const renderCards = (itemData) => {
    const item = itemData.item;
    return <PoolCard item={item} icons={icons} setIcons={setIcons}  />
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

export default Pools

const styles = StyleSheet.create({
  homeCount: {
    // flex:1,
    height: "100%"
  }
})