import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import LeaderboardBanner from './LeaderboardBanner';

const Leaderboard = () => {
  return (
    <View style={styles.view}>
      <LeaderboardBanner />

        <View style={styles.places}>
        <Text style={styles.place_2}>2</Text>

      <View style={styles.crown_div}>
      
      <Image source={require('./crown.png')} styles={styles.img}></Image>
       
      </View>
      <Text style={styles.place_3}>3</Text>
        </View>

      <View style={styles.ellipse}>
        <Image
          source={require('./ProfilePic_Small.png')}
          styles={styles.img_profile}></Image>
            
        <Image
          source={require('./ProfilePic_Big.png')}
          styles={styles.img_profile}></Image>
           
        <Image
          source={require('./ProfilePic_Small.png')}
          styles={styles.img_profile}></Image>
            
      </View>

      <View style={styles.placement}>
        <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>4</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>964</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>5</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>864</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>6</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>764</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>7</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>664</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>8</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>564</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum}>9</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>464</Text>
      </View>

      <View style={styles.placement}>
      <View style={styles.numberPlacement}>
          <Text style={styles.leaderboardNum_10}>10</Text>
        </View>
        <Image
          source={require('./ProfileIcon.png')}
          styles={styles.img_icon}></Image>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.numberText}>364</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#94C56B',
    height: Dimensions.get('window').height,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  img_profile: {
    borderRadius: 58 / 2,
    borderColor: '#FFFFFF',
    borderWidth:10,
    backgroundColor: '#3B5249',
 
  },

  img_icon: {
    marginHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  ellipse: {
    flexDirection: 'row',
    justifyContent:'center',
    borderRadius: 100 / 2,
    borderColor: '#FFFFFF',
    borderWidth:5,
    backgroundColor: '#3B5249',
  },

  crown_div: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },

  placement: {
    height: 36,
    width: 325,
    marginHorizontal: 50,
    marginTop: 22,
    backgroundColor: '#3B5249',
    borderRadius: Dimensions.get('window').width * 0.1,
    flexDirection: 'row',
  },

  nameText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 12,
  },

  leaderboardNum: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },

  leaderboardNum_10: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },

  numberText: {
    color: '#A4B494',
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 100,
  },

  runnerUps:{
    flexDirection:'row',
  },

  places:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:150,
  },

  place_2:{
      color:'#FFFFFF',
      fontWeight:'bold',
      fontSize:30,
      marginRight:17,
    
  },
  place_3:{
    color:'#FFFFFF',
      fontWeight:'bold',
      fontSize:30,
      marginLeft:17,
},

ellipse2:{
          
}

});

export default Leaderboard;
