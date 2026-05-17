import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReserveRoomWithHookForm = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      date: 'May 6 - 11',
      guests: '1 guest',
    },
  });

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);

  const onSubmit = (data) => {
  };

  // Handle Date Change
  const onDateChange = (event, date) => {
    setDatePickerVisible(false);
    if (date) {
      setSelectedDate(date);
      const formattedDate = date.toDateString();
      setValue('date', formattedDate);
    }
  };

  const updateGuestCount = (count) => {
    setGuestCount(count);
    setValue('guests', `${count} guest${count > 1 ? 's' : ''}`);
  };

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your trip</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Dates</Text>
              <Controller
                control={control}
                name="date"
                render={({ field: { value } }) => <Text style={styles.value}>{value}</Text>}
              />
            </View>
            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Guests</Text>
              <Controller
                control={control}
                name="guests"
                render={({ field: { value } }) => <Text style={styles.value}>{value}</Text>}
              />
            </View>
            <TouchableOpacity onPress={() => setGuestModalVisible(true)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Confirm Booking</Text>
        </TouchableOpacity>

        {datePickerVisible && (
          <DateTimePicker value={selectedDate} mode="date" display="default" onChange={onDateChange} />
        )}

        <Modal visible={guestModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Guests</Text>
              <View style={styles.guestControls}>
                <TouchableOpacity onPress={() => updateGuestCount(guestCount - 1)} disabled={guestCount <= 1}>
                  <Ionicons name="remove-circle-outline" size={30} color={guestCount > 1 ? 'black' : 'gray'} />
                </TouchableOpacity>
                <Text style={styles.guestCount}>{guestCount}</Text>
                <TouchableOpacity onPress={() => updateGuestCount(guestCount + 1)}>
                  <Ionicons name="add-circle-outline" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Button title="Done" onPress={() => setGuestModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveRoomWithHookForm;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom:100
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
  submitButton: {
    backgroundColor: '#FF5A5F',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guestControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  guestCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
