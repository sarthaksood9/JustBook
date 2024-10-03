// LoginScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [country, setCountry] = useState('United States');

    const handleContinue = () => {
        console.log('Continue button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.TitleView}>
                <Text style={styles.title}>Log in or sign up</Text>
                <Icon2 name='cross' style={styles.crossIcon}></Icon2>
            </View>


            <View style={styles.uperview}>


                <View style={styles.inputView}>
                    <View style={styles.countryContainer}>
                        <View style={styles.countryView}>
                            <Icon name='arrow-down' style={styles.downIcon}></Icon>
                            <Text style={styles.cr}>Contery/Region</Text>
                            <View style={styles.countryInputView}>
                                <Text style={styles.countryText}>{country}</Text>
                                <Text style={styles.countryCodeText}>{`(${countryCode})`}</Text>
                            </View>
                        </View>
                    </View>
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType="phone-pad"
                    />
                </View>
                <Text style={styles.disclaimerText}>
                    We'll call or text to confirm your number. Standard message and data rates apply
                </Text>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
        // backgroundColor:"blue",
        position: "relative",
        gap: 1
    },
    TitleView: {
        width: "120%",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 9,
        position: "absolute",
        top: 1
        // marginBottom:
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
        top: 9,
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

export default LoginScreen;