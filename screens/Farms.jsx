import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { farmsDummyData } from '../Data/farms';
import RoomCard from '../components/RoomCard';
import Search from '../components/Search';
import UpperNav from '../components/UpperNav';

const Farms = () => {
  const [data, setData] = useState(farmsDummyData);

  const route = "farms"

  const renderCards = (itemData) => {
    const item = itemData.item;
    return <RoomCard route={route} item={item} />
  }

  return (
    <View style={styles.homeCount}>
      <Search />
      <UpperNav />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 18 }}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCards}
      />
    </View>
  )
}

export default Farms

const styles = StyleSheet.create({
  homeCount: {
    height: "100%"
  }
})
