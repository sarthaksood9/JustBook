// LoginScreen.js
import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
    Modal,
    Animated,
    KeyboardAvoidingView,
    Easing,
    Dimensions,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { CountryPicker } from 'react-native-country-codes-picker';
import { Controller, useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';

const LoginDrower = ({isAdmin, setIsAdmin,modalVisible, setModalVisible, slideAnim}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [country, setCountry] = useState(false);
    const [countryName, setCountryName] = useState("United States");

    const handleContinue = () => {
        setCountry(true);
    };

    console.log(isAdmin);


    const closeDrawer = () => {
        Animated.timing(slideAnim, {
            toValue: 900,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start(() => setModalVisible(false));
    };




    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            // countCode: "",
            // countName: "",
            phone: "",
        }
    })

    
    
    const {logIn,user} = useContext(UserContext);
    
    const onSubmit = async (data) => {
        const userData={
            phoneNum:data.phone,
        }
        await logIn(userData);
        closeDrawer();
    };



    return (
        <View style={styles.container}>
            <Modal
                visible={modalVisible}
                transparent
                animationType="none"
            >
                <View style={styles.modalBackground}>
                    {<TouchableOpacity style={styles.overlay} onPress={closeDrawer} />}
                    {/* <KeyboardAvoidingView behavior='position'> */}
                    <Animated.View
                        style={[
                            styles.drawerContainer,
                            {
                                transform: [{ translateY: slideAnim }],
                            },
                        ]}

                    >
                        <View style={styles.TitleView}>
                            <Text style={styles.title}>Log in or sign up</Text>
                            <Icon2 onPress={closeDrawer} name='cross' style={styles.crossIcon}></Icon2>
                        </View>


                        <View style={styles.uperview}>
                            <CountryPicker
                                style={{
                                    modal: {
                                        // height: 600,
                                        paddingTop: 10
                                    },
                                    list: {
                                        paddingTop: 10
                                    },
                                    itemsList: {
                                        paddingTop: 40
                                    }
                                }}

                                show={country}
                                // when picker button press you will get the country object with dial code
                                pickerButtonOnPress={(item) => {
                                    setCountryName(item.name.es)
                                    setCountryCode(item.dial_code);
                                    setCountry(false);
                                }}
                            >
                            </CountryPicker>


                            <View style={styles.inputView}>


                                {/* <Controller
                                    control={control}
                                    name="countName"
                                    rules={{ required: 'Country is required' }}
                                    render={({ field: { onPress } }) =>(<Pressable onPress={handleContinue} >
                                        <View style={styles.countryContainer}>
                                            <View style={styles.countryView}>
    
                                                <Icon name='arrow-down' style={styles.downIcon}></Icon>
                                                <Text style={styles.cr}>Contery/Region</Text>
                                                <View style={styles.countryInputView}>
                                                    <Text style={styles.countryText}>{countryName}</Text>
                                                    <Text style={styles.countryCodeText}>{`(${countryCode})`}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Pressable>) }
                                />
                                {errors.countName && <Text style={{ color: 'red', marginTop: -12, marginLeft: 7 }}>{errors.countName.message}</Text>} */}

                                <Pressable onPress={handleContinue} >
                                    <View style={styles.countryContainer}>
                                        <View style={styles.countryView}>

                                            <Icon name='arrow-down' style={styles.downIcon}></Icon>
                                            <Text style={styles.cr}>Contery/Region</Text>
                                            <View style={styles.countryInputView}>
                                                <Text style={styles.countryText}>{countryName}</Text>
                                                <Text style={styles.countryCodeText}>{`(${countryCode})`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>


                                <Controller
                                    control={control}
                                    name="phone"
                                    rules={{
                                        required: 'phone is required',
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: 'Phone number must be digits only'
                                        }

                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={styles.phoneNumberInput}
                                            placeholder="Phone number"
                                            keyboardType="phone-pad"
                                        />
                                    )}
                                />
                            </View>
                            {errors.phone && <Text style={{ color: 'red', marginTop: -12, marginLeft: 7 }}>{errors.phone?.message}</Text>}
                            <Text style={styles.disclaimerText}>
                                We'll call or text to confirm your number. Standard message and data rates apply
                            </Text>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.continueButton}>
                                <Text style={styles.continueButtonText}>Continue</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.orContainer}>
                            <View style={styles.lines}></View>
                            <Text style={styles.orText}>or</Text>
                            <View style={styles.lines}></View>
                        </View>
                        <View style={styles.bottomView}>
                            <TouchableOpacity style={styles.buttonView}>
                                <Image style={styles.logos} source={require("../assets/Images/Logos/Mail.png")} />
                                <Text style={styles.btn}>Continue with email</Text>
                            </TouchableOpacity>
                            {Platform.OS === 'ios' && (
                                <TouchableOpacity style={styles.buttonView}>
                                    <Image style={{
                                        height: 22,
                                        width: 22,
                                        position: "absolute",
                                        top: 8,
                                        left: 14
                                    }} source={require("../assets/Images/Logos/apple.png")} />
                                    <Text style={styles.btn}>Continue with Apple</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.buttonView}>
                                <Image style={styles.logos} source={require("../assets/Images/Logos/GoogleLogo.png")} />
                                <Text style={styles.btn}>Continue with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonView}>
                                <Image style={
                                    {
                                        height: 22,
                                        width: 22,
                                        position: "absolute",
                                        top: 8,
                                        left: 14
                                    }
                                } source={require("../assets/Images/Logos/Facebook.png")} />
                                <Text style={styles.btn}>Continue with Facebook</Text>
                            </TouchableOpacity>
                        </View>

                    </Animated.View>
                    {/* </KeyboardAvoidingView> */}
                </View>
            </Modal >

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        position: "relative",
        gap: 1
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    overlay: {
        flex: 1,
    },
    drawerContainer: {
        height: Dimensions.get("screen").height - 50,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
    },
    TitleView: {
        height: 45,
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 9,
        top: 1,
        marginHorizontal: -20,
        marginBottom: 30
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    uperview: {
        width: "100%",
        gap: 18
    },
    inputView: {
        borderColor: "gray",
        borderWidth: 0.5,
        width: "100%",
        borderRadius: 7.5

    },
    downIcon: {
        position: "absolute",
        right: 17,
        top: 18.5
    },
    crossIcon: {
        position: "absolute",
        left: 17,
        top: 12.7,
        fontSize: 21
    },
    countryView: {
        paddingVertical: 6,
        gap: 2,
        width: "100%",
        borderBottomColor: "black",
        borderBottomWidth: 0.3,
        paddingHorizontal: 10,
        position: "relative",
    },
    cr: {
        fontSize: 12,
        color: "rgb(129, 129, 129)"
    },
    countryInputView: {
        flexDirection: "row",
        width: "100%"
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryText: {
        fontSize: 14,
        marginRight: 10,
    },
    countryCodeText: {
        fontSize: 16,
        color: '#ccc',
    },
    phoneNumberInput: {
        height: 49,
        fontSize: 18,
        fontWeight: "500",
        paddingHorizontal: 10,
        width: '100%',
    },
    disclaimerText: {
        fontSize: 14,
        color: '#666',
    },
    continueButton: {
        backgroundColor: '#f23258fc',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

    orContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: "row",
        padding: 20,
        gap: 10
    },
    lines: {
        width: "49%",
        height: 0.2,
        backgroundColor: "gray"
    },
    orText: {
        fontSize: 16,
        color: "gray",
        fontWeight: "600"
    },


    bottomView: {
        width: "100%",
        gap: 14
    },
    buttonView: {
        position: "relative",
        padding: 10,
        borderRadius: 5,
        width: '100%',
        borderColor: 'black',
        borderWidth: 0.67,
    },
    btn: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        fontWeight: "500"
    },
    logos: {
        height: 30,
        width: 30,
        position: "absolute",
        top: 6,
        left: 14
    }


});

export default LoginDrower;