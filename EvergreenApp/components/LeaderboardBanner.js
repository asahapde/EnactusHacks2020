import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const LeaderboardBanner = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.text}>LeaderBoard</Text>
      </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 15,
    backgroundColor: '#3B5249',
    borderBottomLeftRadius: Dimensions.get('window').width * 0.1,
    borderBottomRightRadius: Dimensions.get('window').width * 0.1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeaderboardBanner;
