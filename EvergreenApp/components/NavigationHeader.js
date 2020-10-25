import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const NavigationHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.text}>Badges</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.statsText}>Stats</Text>
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
    flexDirection: 'row',
    marginBottom: 10,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 40,
  },

  statsText: {
    color: '#94C56B',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 40,
  },
});

export default NavigationHeader;
