import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

let name = 'Bobby Darloe';
let currentBadge = 'Planter';
let totalTreesPlanted = 21;

const ProfileHeader = () => {
  const [menuItems, setCurrentItem] = useState([
    'BADGES',
    'LOCATIONS',
    'STATS',
  ]);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Profile</Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/ProfileImage.png')}></Image>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.infoText}>
        {currentBadge} | {totalTreesPlanted} Trees Planted
      </Text>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <Text style={styles.menuText}>{item}</Text>}
        style={styles.menu}
        horizontal={true}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('window').height / 2,
    padding: 15,
    backgroundColor: '#3B5249',
    borderBottomRightRadius: Dimensions.get('window').width * 0.1,
    borderBottomLeftRadius: Dimensions.get('window').width * 0.1,
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

  imageStyle: {
    marginTop: 15,
    width: 110,
    height: 110,
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },

  nameText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
  },

  infoText: {
    color: '#94C56C',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    margin: 5,
  },

  menuText: {
    color: 'white',
    fontSize: 20,
    marginRight: 25,
    marginLeft: 25,
    fontWeight: '700',
    alignItems: 'center',
  },

  menu: {
    margin: 50,
    width: Dimensions.get('window').width,
  },

  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileHeader;
