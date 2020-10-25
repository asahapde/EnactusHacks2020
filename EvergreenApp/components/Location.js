import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const Location= (props) => {
  return (
    <View style={props.hideMe ? styles.hidden : styles.notHidden}>
        <View style={styles.bg}>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
      backgroundColor: 'black',
      height: 100,
      width: 100,
  },
  hidden: {
    display: 'none',
  },
  notHidden: {
    display: 'flex',
  },
});

export default Location;
