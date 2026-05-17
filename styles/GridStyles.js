import { StyleSheet } from 'react-native';

export const gridStyles = StyleSheet.create({
  gridBox: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
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
    overflow: "hidden",
    backgroundColor: "rgb(157, 157, 157)"
  },
  imageView2: {
    height: "100%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: "100%",
    width: "100%",
  }
});
