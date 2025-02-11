import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Animated, Easing, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';







const SignUpDrower = ({ signInmodalVisible, setSignInmodalVisible, slideAnim }) => {

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: 900,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => setSignInmodalVisible(false));
  };


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [optOut, setOptOut] = useState(false);

  const [calenderVisible, setSalenderVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        visible={signInmodalVisible}
        // transparent
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
            <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
              <View style={styles.headView}>
                <TouchableOpacity onPress={closeDrawer} style={styles.backButton}>
                  <Ionicons name="chevron-back" size={19} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>Finish signing up</Text>
              </View>

              <Text style={styles.label}>Legal name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, {
                    borderBottomColor: "gray",
                    borderBottomWidth: 0.6,
                  }]}
                  placeholder="First name on ID"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last name on ID"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
              <Text style={styles.helperText}>
                Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.
              </Text>

              <Text style={styles.label}>Date of birth</Text>
              <View style={styles.inputContainer} >

                <TextInput
                  onPress={() => { setSalenderVisible(true) }}
                  style={styles.input}
                  placeholder="Birthdate"
                  value={birthdate}
                  onChangeText={setBirthdate}
                />
                <Ionicons name="chevron-down" size={24} color="black" style={styles.icon} />
              </View>

              {calenderVisible && <Calendar
                onDayPress={day => {
                  setBirthdate(day.dateString);
                  setSalenderVisible(false);
                }}
              />}
              <Text style={styles.helperText}>
                To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb.
              </Text>

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Text style={styles.helperText}>
                We'll email you trip confirmations and receipts.
              </Text>

              <Text style={styles.terms}>
                By selecting Agree and continue, I agree to Airbnb's{' '}
                <Text style={styles.link}>Terms of Service</Text>,{' '}
                <Text style={styles.link}>Payments Terms of Service</Text> and{' '}
                <Text style={styles.link}>Nondiscrimination Policy</Text> and acknowledge the{' '}
                <Text style={styles.link}>Privacy Policy</Text>.
              </Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Agree and continue</Text>
              </TouchableOpacity>

              <Text style={styles.marketingText}>
                Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.
              </Text>

              <TouchableOpacity style={styles.checkboxContainer} onPress={() => setOptOut(!optOut)}>
                <View style={[styles.checkbox, optOut && styles.checked]}>
                  {optOut && <Ionicons name="checkmark" size={18} color="white" />}
                </View>
                <Text style={styles.checkboxLabel}>I don't want to receive marketing messages from Airbnb.</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    backgroundColor: 'blue',
    position: "relative",
    gap: 1,
    // height: "100%",
    
  },
  modalBackground: {

    // flex: 1,
    height: "100%",
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'green',
  },
  overlay: {
    flex: 1,
  },
  drawerContainer: {
    // height: Dimensions.get("screen").height - 50,
    // height: "100%",
    position:"absolute",
    zIndex:10,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // paddingHorizontal: 20,
  },
  container1: {
    // flex: 1,
    padding: 20,
    marginBottom: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    height: "100%"
  },
  headView: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.4,
    position:"relative",
    width:"",
    paddingBottom: 10,
    marginBottom: 20,
  },
  backButton: {
    // marginBottom: 20,
    position:"absolute",
    left:-5,
    top:1
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    // marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 12,
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  helperText: {
    color: '#666',
    marginBottom: 15,
  },
  terms: {
    marginTop: 20,
    marginBottom: 20,
  },
  link: {
    color: '#0000FF',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  marketingText: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  checked: {
    backgroundColor: 'black',
  },
  checkboxLabel: {
    flex: 1,
  },
});

export default SignUpDrower