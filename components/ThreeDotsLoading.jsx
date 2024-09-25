import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const DotWaveAnimation = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  const animateDot = (dot, delay) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: -5, 
          duration: 300,
          delay: delay,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0, 
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    );
  };


  useEffect(() => {
    animateDot(dot1, 0).start();    
    animateDot(dot2, 150).start();  
    animateDot(dot3, 300).start(); 
  }, []);

  return (
    <View style={styles.container}>
      {/* Dots w */}
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
  },
});

export default DotWaveAnimation;
