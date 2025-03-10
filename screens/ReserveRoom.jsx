import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ReserveRoom = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Confirm and pay</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.propertyCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1618767689160-da3fb810aad7?q=80&w=400&auto=format' }}
            style={styles.propertyImage}
          />
          <View style={styles.propertyInfo}>
            <Text style={styles.propertyType}>Treehouse</Text>
            <Text style={styles.propertyName}>Tree house Usha</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="black" />
              <Text style={styles.rating}>4.97 (213)</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.superhost}>Superhost</Text>
            </View>
          </View>
        </View>

        <View style={styles.cancellationPolicy}>
          <View style={styles.cancellationText}>
            <Text style={styles.cancellationTitle}>
              Free cancellation for 48 hours. Get a full refund if you change your mind.
            </Text>
          </View>
          <Ionicons name="calendar" size={24} color="black" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your trip</Text>
          
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Dates</Text>
              <Text style={styles.value}>May 6 – 11</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Guests</Text>
              <Text style={styles.value}>1 guest</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price details</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>₹4,779.22 x 5 nights</Text>
            <Text style={styles.priceValue}>₹23,896.10</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>Airbnb service fee</Text>
            <Text style={styles.priceValue}>₹3,918.96</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.totalText}>Total (INR)</Text>
            <Text style={styles.totalValue}>₹27,815.06</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.moreInfo}>More info</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveRoom;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  propertyCard: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  propertyImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  propertyInfo: {
    marginTop: 15,
  },
  propertyType: {
    fontSize: 14,
    color: '#717171',
  },
  propertyName: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 5,
  },
  superhost: {
    fontSize: 14,
  },
  cancellationPolicy: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    alignItems: 'center',
  },
  cancellationText: {
    flex: 1,
    marginRight: 15,
  },
  cancellationTitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#717171',
  },
  edit: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  priceText: {
    fontSize: 16,
  },
  priceValue: {
    fontSize: 16,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    paddingTop: 15,
    marginTop: 15,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  moreInfo: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
