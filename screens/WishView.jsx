import React, { useState, useEffect } from 'react';
import { View, Text, Image, Easing, TouchableOpacity, StyleSheet, FlatList, Pressable, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import RoomCard from '../components/RoomCard';
import ThreeDotsLoading from '../components/ThreeDotsLoading';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import BottomDrawer from '../components/BottomDrawer';
import { gridStyles } from '../styles/GridStyles';

const WishView = () => {
    const wishlist = useSelector(state => state.wishlist.items);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(300));
    const [notes, setNotes] = useState();

    const navigate = useNavigation();

    const handleBackBtn = () => {
        navigate.navigate("wishlist")
    }

    const openDrawer = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start();
    };

    useEffect(() => {
        setData(wishlist);
    }, [wishlist])

    const route = "wishview"

    const renderCards = (itemData) => {
        const item = itemData.item;
        return (
            <>
                <RoomCard route={route} item={item} />
                <TouchableOpacity onPress={openDrawer} style={styles.input}>
                    <Text style={styles.inputText}>{item.note ? `${item.note}` : "Add note"}</Text>
                </TouchableOpacity>
                <BottomDrawer setNotes={setNotes} val={item.note} id={item.id} modalVisible={modalVisible} setModalVisible={setModalVisible} slideAnim={slideAnim} />
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
        paddingHorizontal: 16,
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
        paddingHorizontal: 16,
    },
})
