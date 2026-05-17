import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import { loadInitialRecents } from '../redux/recentVisit/actions';


const RecentVisit = () => {
    const state = useSelector(state => state.recentVisit.items)
    const [sapData, setSapData] = useState([]);

    dayjs.extend(relativeTime);
    dayjs.extend(isToday);
    dayjs.extend(isYesterday);

    useEffect(() => {
        function categorizeByDate(objects) {
            const todayArray = { date: "Today", items: [] };
            const yesterdayArray = { date: "Yesterday", items: [] };
            const dateArrays = [];

            const currentDate = dayjs();

            objects.forEach((obj) => {
                const dateAdded = dayjs(obj.dateAdded);

                if (dateAdded.isToday()) {
                    todayArray.items.push(obj);
                } else if (dateAdded.isYesterday()) {
                    yesterdayArray.items.push(obj);
                } else {
                    const readableDate = dateAdded.format('MMMM D, YYYY');

                    let dateGroup = dateArrays.find(group => group.date === readableDate);
                    if (!dateGroup) {
                        dateGroup = { date: readableDate, items: [] };
                        dateArrays.push(dateGroup);
                    }
                    dateGroup.items.push(obj);
                }
            });

            const result = [];
            if (todayArray.items.length > 0) result.push(todayArray);
            if (yesterdayArray.items.length > 0) result.push(yesterdayArray);
            result.push(...dateArrays);

            return result;
        }

        const newData = categorizeByDate(state);
        setSapData(newData);
    }, [state]);
    const navigate = useNavigation();

    const handleBackBtn = () => {
        navigate.goBack()
    }


    return (
        <View style={styles.main}>
            <View style={styles.editView}>
                <Pressable onPress={() => { handleBackBtn() }}>
                    <Icon3 name="keyboard-arrow-left" style={styles.BackBtn} />
                </Pressable>
                <Text style={styles.editBtn}>Edit</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={styles.wishListView}>
                    <Text style={styles.heading}>Recently viewed</Text>
                    {sapData.map((item, index) => {
                        return (
                            <View key={index} style={styles.wishListGridsView}>
                                <Text style={styles.today}>{item.date}</Text>
                                <View style={styles.wishListGrids}>
                                    {item?.items.map((card, i) => {
                                        return (
                                            <View key={i} style={styles.gridBox}>
                                                <View style={styles.grid}>
                                                    <View style={styles.imageView2}>
                                                        <Image style={styles.img} source={{ uri: card.imgUrl }} />
                                                    </View>
                                                </View>
                                                <View style={styles.gridBoxTextView}>
                                                    <Text style={styles.gridBoxTitle}>{card.name}</Text>
                                                    <Text style={styles.gridBoxSubTitle}>{card.hostedBy}</Text>
                                                </View>
                                            </View>

                                        )
                                    })}
                                </View>

                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default RecentVisit

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "white",
        position: "relative"

    },
    BackBtn: {
        fontSize: 25,
        marginLeft: -5.7
    },
    editView: {
        position: "fixed",
        width: "100%",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editBtn: {
        textDecorationLine: "underline",
        fontWeight: "500",
        fontSize: 17,
        fontFamily: 'Inter_500Regular'

    },
    wishListView: {
        marginTop: 17
    },
    heading: {
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 18
    },
    wishListGridsView: {
        paddingVertical: 7
    },
    wishListGrids: {
        marginVertical: 10,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    gridBox: {

    },
    grid: {
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        width: 162,
        height: 162,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        borderRadius: 20,
        overflow: "hidden",
    },
    gridBoxTextView: {
        paddingVertical: 8,
        gap: 4
    },
    gridBoxTitle: {
        width: 162,
        fontWeight: "500",
        fontSize: 17.5
    },
    gridBoxSubTitle: {
        width: 162,
        color: "rgb(117, 114, 119)",
        fontSize: 15.3,
        fontWeight: "450"
    },

    imageView: {
        height: 75,
        width: 75,
        overflow: "hidden"
    },
    imageView2: {
        height: "100%",
        width: '100%'
    },
    img: {
        height: "100%",
        width: "100%",
    },
    today: {
        color: "rgb(46, 45, 45)",
        fontSize: 23,
        fontWeight: "500"
    }
})
