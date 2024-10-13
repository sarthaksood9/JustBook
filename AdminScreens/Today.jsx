
import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';


export default function Today() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={require('./assets/bell-icon.png')}
          style={styles.bellIcon}
        /> */}

        <EvilIcons name="bell" size={24} color="black" />
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, Sarthak!</Text>
        <TouchableOpacity style={styles.completeListingButton}>
          <Text style={styles.buttonText}>Complete your listing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reservationsSection}>
        <Text style={styles.sectionTitle}>Your reservations</Text>
        <View style={styles.reservationButtons}>
          <TouchableOpacity style={styles.reservationButton}>
            <Text style={styles.reservationButtonText}>Checking out (0)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reservationButton}>
            <Text style={styles.reservationButtonText}>Currently hosting (0)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.noGuestsSection}>
        {/* <Image
          source={require('./assets/check-icon.png')}
          style={styles.checkIcon}
        /> */}
        <Feather name="inbox" size={24} color="black" />
        <Text style={styles.noGuestsText}>
          You don't have any guests{'\n'}checking out today or tomorrow.
        </Text>
      </View>

      <View style={styles.allReservationsSection}>
        <TouchableOpacity>
          <Text style={styles.allReservationsText}>All reservations (0)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'flex-end',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  welcomeSection: {
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '600',
  },
  completeListingButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: '10',
    marginTop: 10,
    alignItems: 'center',
    width: "55%"
  },
  buttonText: {
    fontSize: 16,
  },
  reservationsSection: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  reservationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reservationButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  reservationButtonText: {
    textAlign: 'center',
  },
  noGuestsSection: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 90,
    marginTop: 20,
    alignItems: 'center',
  },
  checkIcon: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },
  noGuestsText: {
    textAlign: 'center',
    fontSize: 16,
  },
  allReservationsSection: {
    marginTop: 20,
  },
  allReservationsText: {
    fontSize: 18,
    fontWeight: 'semibold',
    textDecorationLine: 'underline',
  },
});

