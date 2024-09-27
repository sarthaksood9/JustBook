import React, { useState,useEffect } from 'react';
import { View, Text, Image, Easing, TouchableOpacity, StyleSheet, FlatList, Pressable, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import RoomCard from '../components/RoomCard';
import ThreeDotsLoading from '../components/ThreeDotsLoading';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import BottomDrowr from '../components/BottomDrowr';

const WishView = ({ icons, setIcons }) => {

    // fatching data from redux-

    const wishlist = useSelector(state => state.wishlist.items);


    // usestates---
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    

    // navigation---
    const navigate = useNavigation();
    const handleBackBtn = () => {
        navigate.navigate("wishlist")
        setIcons("wishlist")
    }

    // modelview handlers----

    const [modalVisible, setModalVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(300));

    const openDrawer = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start();
    };


    const [notes, setNotes] = useState();


    useEffect(() => {
        setData(wishlist);
    }, [notes])

    const renderCards = (itemData) => {
        const item = itemData.item;
        return (
            <>
                <RoomCard item={item} icons={icons} setIcons={setIcons} />
                <TouchableOpacity onPress={openDrawer} style={styles.input}>
                    <Text style={styles.inputText}>{item.note ? `${item.note}` : "Add note"}</Text>
                </TouchableOpacity>
                <BottomDrowr setNotes={setNotes} val={item.note} id={item.id} modalVisible={modalVisible} setModalVisible={setModalVisible} slideAnim={slideAnim} />
            </>

        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.editView}>
                <Pressable onPress={() => { handleBackBtn() }}>
                    <Icon3 name="keyboard-arrow-left" style={styles.BackBtn} />

                </Pressable>
                <Icon name="dots-three-horizontal" style={{ fontSize: 22 }} />
            </View>
            <Text style={styles.title}>Goods</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Dates · Guests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Share </Text>
                </TouchableOpacity>
            </View>

            {loading ? <ThreeDotsLoading /> : <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 18 }}
                data={data}
                key={item => item.name}
                renderItem={renderCards}
            />}

        </View>
    );
};

export default WishView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
        fontWeight: 'semibold',
        marginTop: 32,
        paddingHorizontal: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 16,
        // marginTop: 16,
        gap: 12,
        marginVertical: 15
    },
    button: {
        borderColor: "gray",
        borderWidth: 0.7,
        paddingHorizontal: 18,
        paddingVertical: 11.3,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 16,
    },
    imageContainer: {
        marginTop: 16,
        height: 300,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    heart: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 24,
        height: 24,
        backgroundColor: 'red',
        borderRadius: 12,
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        paddingHorizontal: 16,
    },
    host: {
        fontSize: 16,
        marginTop: 4,
        paddingHorizontal: 16,
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginTop: -6
    },
    inputText: {
        fontSize: 16,
    },
    BackBtn: {
        fontSize: 25,
        marginLeft: -5.7
    },
    editView: {
        width: "100%",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"blue",
        paddingHorizontal: 16,
    },
    editBtn: {
        textDecorationLine: "underline",
        fontWeight: "500",
        fontSize: 17,
        fontFamily: 'Inter_500Regular'

    },
})