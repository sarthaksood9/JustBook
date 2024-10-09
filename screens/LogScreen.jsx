// import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Easing, Animated } from 'react-native';
import LoginDrower from '../components/LoginDrower';
import { Ionicons } from '@expo/vector-icons';

const LogScreen = ({isAdmin, setIsAdmin}) => {

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

    // useEffect(() => {
    //     openDrawer();
    // }, [])


    return (
        <View style={{ flex: 1  }}>
            <ScrollView style={{ backgroundColor: 'white', padding: 20 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>Profile</Text>

                <Text style={{ fontSize: 22, color: '#666', marginBottom: 30 }}>
                    Log in to start planning your next trip.
                </Text>

                <TouchableOpacity
                    onPress={openDrawer}
                    style={{
                        backgroundColor: '#FF385C',
                        padding: 15,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginBottom: 20
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Log in</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 16, marginBottom: 30 }}>
                    Don't have an account? <Text onPress={openDrawer} style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                </Text>

                <View style={{ paddingVertical: 7, paddingHorizontal: 20, backgroundColor: '#f8f8f8', borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 10 }}>Airbnb your home</Text>
                            <Text style={{ fontSize: 16, color: '#666' }}>It's easy to start hosting and earn extra income.</Text>
                        </View>
                        <Image
                            source={require("../assets/homeImg.png")}
                            style={{ width: 110, height: 110 }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>

                    {/* {['Settings', 'Accessibility', 'Visit the Help Center'].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: '#E0E0E0'
                            }}
                        >
                            <View style={{
                                width: 24,
                                height: 24,
                                marginRight: 15,
                                borderWidth: 2,
                                borderColor: '#000',
                                borderRadius: 12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {item === 'Visit the Help Center' ? (
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>?</Text>
                                ) : (
                                    <Text style={{ fontSize: 16 }}>⚙️</Text>
                                )}
                            </View>
                            <Text style={{ fontSize: 18, flex: 1 }}>{item}</Text>
                            <Text style={{ fontSize: 18 }}></Text>
                        </TouchableOpacity>
                    ))} */}

                    {[
                        { icon: 'person-outline', text: 'Personal information' },
                        { icon: 'card-outline', text: 'Payments and payouts' },
                        { icon: 'document-text-outline', text: 'Taxes' },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                            <Ionicons name={item.icon} size={24} color="black" style={{ marginRight: 15 }} />
                            <Text style={{ flex: 1, fontSize: 18 }}>{item.text}</Text>
                            <Ionicons name="chevron-forward" size={24} color="#666" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {modalVisible && <LoginDrower isAdmin={isAdmin} setIsAdmin={setIsAdmin} modalVisible={modalVisible} setModalVisible={setModalVisible} slideAnim={slideAnim} />}
            {/* {<LoginDrower modalVisible={modalVisible} setModalVisible={setModalVisible} slideAnim={slideAnim} />} */}

        </View>
    )
}

export default LogScreen

const styles = StyleSheet.create({})