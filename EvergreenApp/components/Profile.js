import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import ProfileHeader from './ProfileHeader';
import Badge from './Badge';
import BadgeHolder from './BadgeHolder';


const Profile = () => {
  return (
    <View style={styles.bg}>
        <ProfileHeader/>
        <BadgeHolder/>
        <Badge lock={true} badgeNumber={0}/>


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
