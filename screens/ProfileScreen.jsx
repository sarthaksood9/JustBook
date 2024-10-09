
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from 'react-native';


import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    console.log('Continue button pressed');
  };

  return (
    // <View style={styles.container}>
    //     <View style={styles.TitleView}>
    //         <Text style={styles.title}>Profile</Text>
    //         <Text style={styles.titleInfo}>Log in to start planing your next trip</Text>
    //     </View>

    //     <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
    //         <Text style={styles.continueButtonText}>Continue</Text>
    //     </TouchableOpacity>
    //     <Text>Don't have an account? Sign up</Text>

    //     <View style={styles.shadowBox}>

    //     </View>
    // </View>


    <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Profile</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
          <Text style={{ color: '#fff', fontSize: 24 }}>S</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sarthak</Text>
          <Text style={{ fontSize: 18, color: '#666' }}>Show profile</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#666" />
      </TouchableOpacity>

      <View style={{ margin: 20, padding: 20, backgroundColor: '#f8f8f8', borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Airbnb your home</Text>
            <Text style={{ fontSize: 18, color: '#666' }}>It's easy to start hosting and earn extra income.</Text>
          </View>
          <Image
            source={require("../assets/homeImg.png")}
            style={{ width: 110, height: 110 }}
          />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>Settings</Text>
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
  );
};

const styles = StyleSheet.create({
});

export default ProfileScreen;