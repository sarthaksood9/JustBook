import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const DotWaveAnimation = () => {
  // Create animated values for each dot
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  // Animation sequence function
  const animateDot = (dot, delay) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: -5, // Move up by 10 units
          duration: 300,
          delay: delay,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0, // Move back down to initial position
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    );
  };

  // Start the animation for all dots
  useEffect(() => {
    animateDot(dot1, 0).start();    // No delay for first dot
    animateDot(dot2, 150).start();  // Delay for the second dot
    animateDot(dot3, 300).start();  // Longer delay for the third dot
  }, []);

  return (
    <View style={styles.container}>
      {/* Dots with animated transforms */}
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot1 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot2 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot3 }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flex:1,
    gap:5
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    // marginHorizontal: 5,
  },
});

export default DotWaveAnimation;
