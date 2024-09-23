import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/Feather';
import { LiaArrowCircleRightSolid } from 'react-icons/lia';

const Search = ({inputVal,setInputVal}) => {


    // const [ii,setIi]=useState("");

   
   
    
    return (
        <View style={styles.main}>
            <View>
                <Icon name="search" size={25} style={{fontWeight:"bold"}}/>
            </View>
            <View>
                <TextInput value={inputVal} onChangeText={(text) => setInputVal(text.toLowerCase())}  style={{fontFamily: 'Inter_400Regular'}} placeholder='Anywhere . any week . Add guests' />
                {/* <TextInput value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} style={{fontFamily: 'Inter_400Regular'}} placeholder='Anywhere . any week . Add guests' /> */}
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    main: {
        marginHorizontal:15,
        borderRadius: 50,
        paddingVertical:10,
        flexDirection: "row",
        gap:"10",
        alignItems: "center",
        elevation: 2,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "",
        paddingHorizontal:20,
        marginBottom:6
    },
    ll:{
        paddingHorizontal:10,
    }
})