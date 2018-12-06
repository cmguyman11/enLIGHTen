import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { Footer } from 'native-base';

import { WebBrowser } from "expo";
import Timer from './Timer';

//Lets Play: just profile
// record thoughts: profile, home
// categories: profile, home 
// vibe: profile, home
// questions(multi): profile, home, settings, timer, add players
// questions(single): profile, home, settings, timer
// every other page: profile, home, settings 


export default class NavBar extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => {
            }}>
                <Image style={styles.profile}
                  source={
                    require("../assets/sachisIphoneHighlighted.png")
              }/>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
              <Timer isRecordingsScreen={false}/>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('AddPlayers', {mode: this.state.mode, category: this.state.category, playersOutOfGame: this.state.playersOutOfGame, playersInGame: this.state.playersInGame})
            }}>
                <Image style={styles.addImageStyle}
                  source={
                    require("../assets/addPlayersButton.png")
              }/>
           </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Mode')
            }}>
                <Image style={styles.homeStyle}
                  source={
                    require("../assets/homeIcon.png")
              }/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Categories', {mode: this.state.mode})
              }}>
                <Image style={styles.homeStyle}
                  source={
                    require("../assets/settingsIcon.png")
              }/>
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainer: {
    display: "flex",
    flexWrap: "wrap",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 150,
  },
  homeStyle: {
    height: 35,
    width: 35,
    marginRight: 10
  },
  addImageStyle: {
    height: 50, 
    width: 50, 
  },
  profileContainer: {
  },
  profile: {
    left: 0,
    height: 45,
    width: 45,
  }
});