import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';


const BadgeHolder = () => {
  return (
    <View style={styles.bg}>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#3B5249',
    height: 80,
    width: Dimensions.get('window').width * 0.75
  },
});

export default BadgeHolder;
