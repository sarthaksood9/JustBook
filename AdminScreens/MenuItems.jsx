import React,{useContext} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Feather name={icon} size={24} color="black" style={styles.icon} />
    <Text style={styles.menuItemText}>{label}</Text>
    <Feather name="chevron-right" size={24} color="black" style={styles.chevron} />
  </TouchableOpacity>
);

// questioncircleo
// AntDesign


const MenuItems = () => {
  const user=useContext(UserContext);
  // user.logOut();
  console.log(user)
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Menu</Text>
      <View style={styles.subMenu}>
        <Text style={styles.subtitle}>HOSTING</Text>
        <MenuItem icon="briefcase" label="Reservations" />
        <MenuItem icon="dollar-sign" label="Earnings" />
        <MenuItem icon="bar-chart-2" label="Insights" />
        <MenuItem icon="book" label="Guidebooks" />
        <MenuItem icon="plus-square" label="Create a new listing" />
        <MenuItem icon="compass" label="Host an Experience" />
      </View>
      <View style={styles.subMenu}>
        <Text style={styles.subtitle}>ACCOUNT</Text>
        <MenuItem icon="briefcase" label="Reservations" />
        <MenuItem icon="settings" label="Settings" />
        <MenuItem icon="bar-chart-2" label="Insights" />
        <MenuItem icon="book" label="Guidebooks" />
        <MenuItem icon="plus-square" label="Create a new listing" />
        <MenuItem icon="compass" label="Host an Experience" />
      </View>

      <View style={styles.BtnView}>
        <TouchableOpacity style={styles.logoutButton} onPress={()=>{user.logOut()}} >
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
        <View style={styles.linksContainer}>
          <Text style={styles.link} onPress={() => openLink('https://example.com/terms')}>
            Terms of Service
          </Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.link} onPress={() => openLink('https://example.com/privacy')}>
            Privacy Policy
          </Text>
        </View>
        <Text style={styles.versionText}>Version 24.40 (203999)</Text>
      </View>

    </ScrollView>
  );
}



export default MenuItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom:100
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subMenu: {
    marginVertical: 16
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
  BtnView:{
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    gap:20,
    paddingBottom:120
  },
  logoutButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  dot: {
    color: '#333',
    fontSize: 16,
    marginHorizontal: 5,
  },
  versionText: {
    color: '#666',
    fontSize: 14,
  },
});