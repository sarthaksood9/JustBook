import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';







const SignUpDrower = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [optOut, setOptOut] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Finish signing up</Text>

      <Text style={styles.label}>Legal name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Birthdate"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <Ionicons name="chevron-down" size={24} color="black" style={styles.icon} />
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 20,
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