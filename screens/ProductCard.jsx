import { Image, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/EvilIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/WishList/actions';
import { UserContext } from '../context/UserContext';


const ProductCard = ({ icons, setIcons }) => {

    const user=  useContext(UserContext);

    const navigate = useNavigation();
    const route = useRoute();
    const { name } = route.params || {};

    const handleBackBtn = () => {
        navigate.goBack();
        setIcons(name)
    }

    const dispatch = useDispatch();
    const item = useSelector(state => state.product.item);



    const [wishPress, setWishPress] = useState(item.wish);

    let wishBtn = {
        fontSize: 30,
        backgroundColor: wishPress ? "#f13333e0" : "white",
        color: wishPress ? "#fff" : "black",
        paddingVertical: 4
    }
    return (
        <View style={{ position: "relative", flex: 1 }}>
            <View style={styles.navBtnsOverlAy}>
                <Pressable onPress={() => { handleBackBtn("rooms") }}>
                    <View style={styles.BtnView}>
                        <Icon3 name="keyboard-arrow-left" style={styles.BackBtn} />
                    </View>
                </Pressable>
                <View style={styles.SWBtnView}>
                    <View style={styles.BtnView}>
                        <Icon name="share-outline" style={styles.sharebBtn} />
                    </View>
                    <View style={styles.BtnView}>
                        <Pressable onPress={() => { { !wishPress ? (dispatch(addItem(item)),user.addToWishlist(item) ): dispatch(removeItem(item.id)) }; setWishPress(!wishPress) }}>
                            <Icon5 name="heart" style={[wishBtn]} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.ImageView}>
                    <Image style={styles.img} source={{ uri: item.imgUrl }} />
                </View>
                <View style={styles.contantView}>
                    <View style={styles.heading}>
                        <Text style={styles.headingText}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.infoView}>
                        <View style={styles.infoImageView}>
                            <Image style={styles.infoImg} source={{ uri: "https://a0.muscache.com/im/pictures/user/User-571409646/original/ea5debfb-2394-444c-ae7a-e30e13363e59.jpeg?im_w=240" }} />
                        </View>
                        <View style={styles.infoTextView}>
                            <Text style={styles.infoHostText}>{item.hostedBy}</Text>
                            <Text style={styles.infoClubText}>{item.club}</Text>
                        </View>
                    </View>
                    <View style={styles.featView}>
                        {item.features.map((feature, index) => {
                            return (
                                <View key={index} style={styles.feat}>
                                    <View style={styles.featIconView}>
                                        <Icon name="bed-outline" size={30} style={styles.featIcon} />
                                    </View>
                                    <View style={styles.featTextView}>
                                        <Text style={styles.featHostText}>{feature.name}</Text>
                                        <Text style={styles.featClubText}>{feature.description}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.botNav}>
                <View style={styles.btnView}>
                    <Text style={styles.clearBtn}>Coming October</Text>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Reserve</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// bed-outline

export default ProductCard

const styles = StyleSheet.create({
    navBtnsOverlAy: {
        position: "absolute",
        top: 10,
        zIndex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 22,
    },
    BtnView: {
        backgroundColor: "white",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",

    },
    BackBtn: {
        fontSize: 30
    },
    SWBtnView: {
        flexDirection: "row",
        gap: 15
    },

    sharebBtn: {
        fontSize: 21,
        // width:30,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6
    },
    main: {
        flex: 1,
        fontFamily: 'Inter_500Regular',
        backgroundColor: "white",
        marginTop: -10
    },
    ImageView: {
        height: "40%",
        width: "100%"
    },
    img: {
        height: "100%",
        width: "100%"
    },
    contantView: {
        paddingHorizontal: 22,
        paddingVertical: 12,
        // gap:12
    },
    heading: {

    },
    headingText: {
        fontWeight: '500',
        fontSize: 30.9,
        fontFamily: 'Inter_500Regular'
    },
    infoView: {
        flexDirection: "row",
        borderBottomColor: "rgb(117, 114, 119)",
        paddingVertical: 10,
        paddingBottom: 15,
        borderBottomWidth: 0.4
    },
    infoImageView: {
        height: 55,
        width: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    infoImg: {
        height: "82%",
        width: "82%",
        borderRadius: "50%"
    },
    infoTextView: {
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 4.8
    },
    infoHostText: {
        fontSize: 17.5,
        fontWeight: "500"
    },
    infoClubText: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgb(117, 114, 119)",
    },
    featView: {
        paddingVertical: 20,
        justifyContent: "space-between",
        gap: 20
    },
    feat: {
        flexDirection: "row",
        // backgroundColor:"gray"
    },
    featIconView: {
        // height:40,
        paddingHorizontal: 10,
        // backgroundColor:"red"
    },
    featIcon: {
        color: "rgb(127, 114, 119)",
        fontSize: 32
    },
    featTextView: {
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 4.8,
        // height:"100%"
        width: "90%",
        gap: 10
    },
    featHostText: {
        fontSize: 17.5,
        fontWeight: "500"
    },
    featClubText: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgb(117, 114, 119)",
        lineHeight: 23
    },
    botNav: {
        position: "absolute",
        bottom: 0,
        zIndex: 120,
        flexDirection: "row",
        // justifyContent: "space-around",
        // backgroundColor: "blue",
        width: "100%",
        borderTopColor: "black",
        borderTopWidth: 0.2,
        shadowColor: "black",
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "",
        paddingHorizontal: 20,
        paddingBottom: 10

    },
    btnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 18,
        width: "100%"
    },
    clearBtn: {
        fontSize: 18,
        fontWeight: "500",
        // textDecorationLine: "underline"
    },
    saveButton: {
        paddingHorizontal: 35,
        paddingVertical: 14.6,
        borderRadius: 8,
        backgroundColor: "#f44d6efc"
    },
    saveButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 17
    }

})