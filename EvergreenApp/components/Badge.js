import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

let images = [
  '../images/Rectangle.png',
  '../images/Rectangle.png',
  '../images/Rectangle.png',
  '../images/Rectangle.png',
  '../images/Rectangle.png',
  '../images/Rectangle.png'
];

const Badge = (badgeNumber) => {
  return (
    <View style={styles.main}>
      <Image source={require('../images/badgeBgLock.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',

  },
});

export default Badge;
