import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Badge from './Badge';

const BadgeHolder = (props) => {
  return (
    <View>
      <View style={styles.bg}>
        <Badge lock={false} badgeNumber={0} />
        <Badge lock={false} badgeNumber={1} />
        <Badge lock={true} badgeNumber={2} />
      </View>
      <View style={styles.bg}>
        <Badge lock={true} badgeNumber={3} />
        <Badge lock={true} badgeNumber={4} />
        <Badge lock={true} badgeNumber={5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#3B5249',
    height: 90,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: Dimensions.get('window').width * 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50
  },
});

export default BadgeHolder;
