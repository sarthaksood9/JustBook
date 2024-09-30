import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // To handle relative time
import isToday from 'dayjs/plugin/isToday'; // For checking if a date is today
import isYesterday from 'dayjs/plugin/isYesterday';
import { loadInitialRecents } from '../redux/recentVisit/actions';


const RecentVisit = ({ icons, setIcons }) => {
    const state = useSelector(state => state.recentVisit.items)
    const [sapData, setSapData] = useState([]);

    


    // useEffect(() => {
    //     function categorizeByDate(objects) {
    //         const todayArray = { date: "Today", items: [] };
    //         const yesterdayArray = { date: "Yesterday", items: [] };
    //         const dateArrays = []; // Array to store date-based groups

    //         const currentDate = new Date(); // Current date and time
    //         const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    //         objects.forEach((obj) => {
    //             const dateAdded = new Date(obj.dateAdded); // Convert the date string into a Date object
    //             const timeDiff = currentDate - dateAdded; // Difference in time (in milliseconds)

    //             if (timeDiff <= oneDay) {
    //                 // Added in the last 24 hours
    //                 todayArray.items.push(obj);
    //             } else if (timeDiff > oneDay && timeDiff <= 2 * oneDay) {
    //                 // Added between 24 and 48 hours ago
    //                 yesterdayArray.items.push(obj);
    //             } else {
    //                 // Added more than 48 hours ago, create a readable date format
    //                 const readableDate = dateAdded.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

    //                 // Find if there's already a group for this date
    //                 let dateGroup = dateArrays.find(group => group.date === readableDate);
    //                 if (!dateGroup) {
    //                     dateGroup = { date: readableDate, items: [] };
    //                     dateArrays.push(dateGroup);
    //                 }
    //                 dateGroup.items.push(obj);
    //             }
    //         });

    //         // Collect all date groups together
    //         const result = [];
    //         if (todayArray.items.length > 0) result.push(todayArray);
    //         if (yesterdayArray.items.length > 0) result.push(yesterdayArray);
    //         result.push(...dateArrays); // Spread to merge date-based arrays

    //         return result;
    //     }
    //     const newData = categorizeByDate(state);
    //     setSapData(newData);
    // }, [])



    // function categorizeByDate(state) {
    //     const todayArray = [];
    //     const yesterdayArray = [];
    //     const dateArrays = {}; // Object to store arrays by readable date

    //     const currentDate = new Date(); // Current date and time
    //     const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    //     objects.forEach((obj) => {
    //         const dateAdded = new Date(obj.dateAdded); // Convert the date string into a Date object
    //         const timeDiff = currentDate - dateAdded; // Difference in time (in milliseconds)

    //         if (timeDiff <= oneDay) {
    //             // Added in the last 24 hours
    //             todayArray.push(obj);
    //         } else if (timeDiff > oneDay && timeDiff <= 2 * oneDay) {
    //             // Added between 24 and 48 hours ago
    //             yesterdayArray.push(obj);
    //         } else {
    //             // Added more than 48 hours ago, create a readable date format
    //             const readableDate = dateAdded.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

    //             // Add to the respective date array
    //             if (!dateArrays[readableDate]) {
    //                 dateArrays[readableDate] = [];
    //             }
    //             dateArrays[readableDate].push(obj);
    //         }
    //     });

    //     return {
    //         today: todayArray,
    //         yesterday: yesterdayArray,
    //         ...dateArrays // Spread operator to merge date-based arrays into the output
    //     };
    // }


    dayjs.extend(relativeTime);
    dayjs.extend(isToday);
    dayjs.extend(isYesterday);

    useEffect(() => {
        function categorizeByDate(objects) {
            const todayArray = { date: "Today", items: [] };
            const yesterdayArray = { date: "Yesterday", items: [] };
            const dateArrays = []; // Array to store date-based groups

            const currentDate = dayjs(); // Current date and time

            objects.forEach((obj) => {
                const dateAdded = dayjs(obj.dateAdded); // Parse date using day.js

                if (dateAdded.isToday()) {
                    // Added today
                    todayArray.items.push(obj);
                } else if (dateAdded.isYesterday()) {
                    // Added yesterday
                    yesterdayArray.items.push(obj);
                } else {
                    // Added more than 2 days ago, format the date
                    const readableDate = dateAdded.format('MMMM D, YYYY'); // Format the date

                    // Find if there's already a group for this date
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
            result.push(...dateArrays); // Spread to merge date-based arrays

            return result;
        }

        const newData = categorizeByDate(state);
        setSapData(newData);
    }, []);
    const navigate = useNavigation();

    const handleBackBtn = () => {
        navigate.navigate("wishlist")
        setIcons("wishlist")
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
        // backgroundColor:"blue"
    },
    editBtn: {
        textDecorationLine: "underline",
        fontWeight: "500",
        fontSize: 17,
        fontFamily: 'Inter_500Regular'

    },
    wishListView: {
        // backgroundColor:"blue",
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

        // shadowRadius:29
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