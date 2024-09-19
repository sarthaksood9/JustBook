import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import RoomCard from '../components/RoomCard'
import { hotelDummyData } from '../Data/hotels'
import UpperNav from '../components/UpperNav'
import BottomNav from '../components/BottomNav'
import Pools from '../Subscreens/Pools'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Rooms from '../Subscreens/Rooms'

const Stack = createStackNavigator();

const Home = () => {
    const data = hotelDummyData;

    const renderCards = (itemData) => {
        const item = itemData.item;
        return <RoomCard item={item} />
    }
    return (
        <View style={styles.main}>




            <NavigationContainer independent={true}>
                <View style={styles.upperNavView}>
                    <Search />
                    <UpperNav />
                </View>
                <Stack.Navigator>
                    <Stack.Screen name="rooms" component={Rooms} options={{ headerShown: false }} />
                    <Stack.Screen name="pools" component={Pools} options={{ headerShown: false }} />
                </Stack.Navigator>
                <BottomNav />
            </NavigationContainer>
        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        // padding:10,
        marginVertical: 8,
        marginVertical: 52,
        position: "relative"
        // flex:1
    },
    upperNavView: {
        elevation: 2,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        paddingTop: 15
    }
})