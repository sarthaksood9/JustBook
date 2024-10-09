import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Feather name={icon} size={24} color="black" style={styles.icon} />
    <Text style={styles.menuItemText}>{label}</Text>
    <Feather name="chevron-right" size={24} color="black" style={styles.chevron} />
  </TouchableOpacity>
);

const MenuItems = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.subtitle}>HOSTING</Text>
      <MenuItem icon="briefcase" label="Reservations" />
      <MenuItem icon="dollar-sign" label="Earnings" />
      <MenuItem icon="bar-chart-2" label="Insights" />
      <MenuItem icon="book" label="Guidebooks" />
      <MenuItem icon="plus-square" label="Create a new listing" />
      <MenuItem icon="compass" label="Host an Experience" />
    </ScrollView>
  );
}



export default MenuItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 18,
    flex: 1,
  },
  chevron: {
    opacity: 0.3,
  },
});