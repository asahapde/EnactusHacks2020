import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import ProfileHeader from './ProfileHeader';
import BadgeHolder from './BadgeHolder';
import Location from './Location';
import Stats from './Stats';

const Profile = () => {
  return (
    <View style={styles.bg}>
      <ProfileHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#94C56C',
    height: Dimensions.get('window').height,
  },
  
});

export default Profile;
