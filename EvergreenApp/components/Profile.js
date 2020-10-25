import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import ProfileHeader from './ProfileHeader';
import Badge from './Badge';
import BadgeHolder from './BadgeHolder';

const Profile = () => {
  return (
    <View style={styles.bg}>
      <ProfileHeader />
      <View style={styles.bottom}>
        <BadgeHolder />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#94C56C',
    height: Dimensions.get('window').height,
  },
  bottom: {
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
  },
});

export default Profile;
