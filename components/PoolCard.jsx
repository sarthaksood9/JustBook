import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hotelDummyData } from '../Data/hotels'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const PoolCard = ({ item,setIcons, icons }) => {
    const navigate = useNavigation();

    const handleCardBtn = () => {
        navigate.navigate("productcard")
            setIcons("productcard")
    }
    return (
        <Pressable onPress={() => { handleCardBtn() }}>
            <View style={styles.cont}>
                <View style={styles.imageView} >
                    <Image style={styles.image} source={{ uri: item.imgUrl }} />
                    <View style={styles.FlotingIcon}>
                        <Icon name="share" size={25} style={{ fontWeight: "bold" }} />
                    </View>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.place}>{item.place}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default PoolCard

const styles = StyleSheet.create({
    imageView: {
        position: "relative"
    },
    image: {
        height: 300,
        width: "100%",
        borderRadius: 8,

    },
    FlotingIcon: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: "rgba(255, 246, 246, 0.667)",
        borderRadius: 50,
        width: 42,
        justifyContent: "center",
        alignItems: 'center',
        height: 40,
        right: 13,
        top: 15
    },

    cont: {
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 8,
        margin: 4,

    },
    textview: {
        paddingVertical: 6,
        gap: 3
    },
    name: {
        fontWeight: "400",
        fontSize: 19,
        fontFamily: 'Inter_400Regular'
    },
    place: {
        fontWeight: "400",
        fontSize: 18,
        color: "rgb(117, 114, 119)",
        fontFamily: 'Inter_400Regular'
    },
    price: {
        fontWeight: "00",
        fontSize: 18,
        fontFamily: 'Inter_400Regular'
    },
    date: {
        fontWeight: "400",
        fontSize: 18,
        color: "rgb(117, 114, 119)",
        fontFamily: 'Inter_400Regular'
    }




})