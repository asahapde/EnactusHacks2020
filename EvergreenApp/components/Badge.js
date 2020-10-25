import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';

let images = [
  require('../images/badge1.png'),
  require('../images/badge2.png'),
  require('../images/badge3.png'),
  require('../images/badge4.png'),
  require('../images/badge5.png'),
  require('../images/badge6.png'),
];

const Badge = (props) => {
  let picSrc;

  if (props.lock) {
    picSrc = require('../images/badgeBgLock.png');
  } else {
    picSrc = require('../images/badgeBgUnlock.png');
  }

  return (
    <View style={styles.main}>
      <ImageBackground source={picSrc} style={styles.bgImg}>
        <Image source={images[props.badgeNumber]}>
        </Image>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    width:70,
    height:70,
    justifyContent: "center",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  main: {
    margin: 10,
  },

});

export default Badge;
