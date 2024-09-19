import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';

const UpperNav = ({ icons, setIcons }) => {

  const navigate = useNavigation();
  const currentRoute = icons;
  const cc = navigate.getCurrentRoute()?.name;




  const hendleNavigateRooms = () => {
    navigate.navigate("rooms")
    setIcons("rooms")
  }
  const hendleNavigatePools = () => {
    navigate.navigate("pools")
    setIcons("pools")
  }
  const hendleNavigatefarms = () => {
    // navigate.navigate("rooms")
    setIcons("farms")
  }
  const hendleNavigatebeach = () => {
    // navigate.navigate("pools")
    setIcons("beach")
  }
  const hendleNavigategolf = () => {
    // navigate.navigate("rooms")
    setIcons("golf")
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
      <Pressable onPress={() => { hendleNavigateRooms() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "farms" ? "" : "", borderBottomWidth: currentRoute === "farms" ? 1.5 : 0 }]}>
          <Icon name="warehouse" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Farms</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => { hendleNavigateRooms() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "beach" ? "" : "", borderBottomWidth: currentRoute === "beach" ? 1.5 : 0 }]}>
          <Icon name="lighthouse" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Beach</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => { hendleNavigateRooms() }}>
        <View style={[styles.iconView, { borderBottomColor: currentRoute === "golf" ? "" : "", borderBottomWidth: currentRoute === "golf" ? 1.5 : 0 }]}>
          <Icon2 name="golf-ball" size={30} style={{ fontWeight: "bold", color: "rgb(141, 141, 141)" }} />
          <Text style={styles.text}>Golf</Text>
        </View>
      </Pressable>
    </View >
  )
}


export default UpperNav
