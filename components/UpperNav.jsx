import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';

const UpperNav = () => {

  const navigate = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  const hendleNavigateRooms = () => {
    navigate.navigate("rooms")
  }
  const hendleNavigatePools = () => {
    navigate.navigate("pools")
  }
  const hendleNavigatefarms = () => {
    navigate.navigate("farms")
  }
  const hendleNavigatebeach = () => {
    navigate.navigate("beach")
  }
  const hendleNavigategolf = () => {
    navigate.navigate("golf")
  }


  const styles = StyleSheet.create({
    uppperNav: {
      flexDirection: "row",
      justifyContent: "space-around",

    },
    iconView: {
      paddingVertical: 7,
      paddingHorizontal: 5,
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
    },
    text: {
      fontFamily: 'Inter_400Regular',
      fontWeight: "400",
      color: "rgb(141, 141, 141)",
    },
  })


  return (
    <View style={styles.uppperNav}>
      <Pressable onPress={() => { hendleNavigateRooms() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "rooms" ? "" : "", borderBottomWidth: currentRoute === "rooms" ? 1.5 : 0 }]}>
          <Icon name="ticket" size={30} style={styles.text} />
          <Text>Icons</Text>
        </View>
      </Pressable >
      <Pressable onPress={() => { hendleNavigatePools() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "pools" ? "" : "", borderBottomWidth: currentRoute === "pools" ? 1.5 : 0 }]}>
          <Icon name="pool" size={30} style={{ fontWeight: "200", color: "rgb(141, 141, 141)" }} />
          <Text style={{fontFamily: 'Inter_400Regular',fontWeight: "400",color:currentRoute !== "pools"? "rgb(141, 141, 141)":"black"}}>Pools</Text>
    </View>
      </Pressable >
      <Pressable onPress={() => { hendleNavigatefarms() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "farms" ? "" : "", borderBottomWidth: currentRoute === "farms" ? 1.5 : 0 }]}>
          <Icon name="warehouse" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Farms</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => { hendleNavigatebeach() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "beach" ? "" : "", borderBottomWidth: currentRoute === "beach" ? 1.5 : 0 }]}>
          <Icon name="lighthouse" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Beach</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => { hendleNavigategolf() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "golf" ? "" : "", borderBottomWidth: currentRoute === "golf" ? 1.5 : 0 }]}>
          <Icon2 name="golf-ball" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Golf</Text>
        </View>
      </Pressable>
    </View >
  )
}


export default UpperNav
