import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const WishList = ({ icons, setIcons }) => {
  const navigate = useNavigation();

  const openRecent = (name) => {
    navigate.navigate(name)
    setIcons(name)
  }

  const wishlist = useSelector(state => state.wishlist.items);


  const plusImg = "https://static.thenounproject.com/png/877484-200.png"

  return (
    <View style={styles.count}>
      <View style={styles.main}>
        <View style={styles.editView}>
          <Text style={styles.editBtn}>Edit</Text>
        </View>
        <View style={styles.wishListView}>
          <Text style={styles.heading}>Wishlists</Text>
          <View style={styles.wishListGrids}>
            <Pressable onPress={() => { openRecent("recentvisit") }}>
              <View style={styles.gridBox}>
                <View style={styles.grid}>
                  <View style={styles.imageView}>
                    <Image style={styles.img} source={{ uri: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq" }} />
                  </View>
                  <View style={styles.imageView}>
                    <Image style={styles.img} source={{ uri: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq" }} />
                  </View>
                  <View style={styles.imageView}>
                    <Image style={styles.img} source={{ uri: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq" }} />
                  </View>
                  <View style={styles.imageView}>
                    <Image style={styles.img} source={{ uri: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq" }} />
                  </View>
                </View>
                <View style={styles.gridBoxTextView}>
                  <Text style={styles.gridBoxTitle}>Recently Viewed</Text>
                  <Text style={styles.gridBoxSubTitle}>Today</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => { openRecent("wishview") }}>
              <View style={styles.gridBox}>
                <View style={styles.grid}>
                  <View style={styles.imageView2}>
                    <Image style={styles.img} source={{ uri: wishlist.length === 0 ? plusImg : wishlist[0].imgUrl }} />
                  </View>
                </View>
                <View style={styles.gridBoxTextView}>
                  <Text style={styles.gridBoxTitle}>Icons 2024</Text>
                  <Text style={styles.gridBoxSubTitle}>{wishlist.length} saved</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({
  count: {
    flex: 1,
    backgroundColor: "white"
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: 'Inter_500Regular',
  },
  editView: {
    width: "100%",
    alignItems: "flex-end"
  },
  editBtn: {
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: 17,
    fontFamily: 'Inter_500Regular'

  },
  wishListView: {
    // backgroundColor:"black"
  },
  heading: {
    fontSize: 30,
    fontWeight: "600"
  },
  wishListGrids: {
    marginVertical: 18,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gridBox: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius:29
  },
  grid: {
    width: 162,
    height: 162,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    backgroundColor: "white",
    borderWidth: 4.5,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
  },
  gridBoxTextView: {
    paddingVertical: 8,
    gap: 4
  },
  gridBoxTitle: {
    fontWeight: "500",
    fontSize: 17.5
  },
  gridBoxSubTitle: {
    color: "rgb(117, 114, 119)",
    fontSize: 15.3,
    fontWeight: "450"
  },

  imageView: {
    height: 75,
    width: 75,
    overflow: "hidden"
  },
  imageView2: {
    height: "100%",
    width: '100%',
    justifyContent: "center", alignItems: "center"
  },
  img: {
    height: "100%",
    width: "100%",
  }
})