import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  ImageBackground
} from "react-native";
import { WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
var HashMap = require('hashmap');

import HelpButton from '../components/HelpButton';

const statics = {
  players: ["Julia", "Cate", "Sachi", "Graziella"]
}

export default class AddPlayerScreen extends React.Component {

  constructor(props) {
    super(props);
    const category = this.props.navigation.state.params.category;
    const mode = this.props.navigation.state.params.mode;
    const player = this.props.navigation.state.params.player;
    this.state = { currPlayer: player, clickedPlayer: "", category: category, mode: mode};
  }

  _addPlayers() {
    this.setState(previousState => ({ question : nextQuestion}));
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
           <View style={styles.welcomeContainer}>
              <ImageBackground style={{height: 650, width: 430, position: "absolute"}}
                source={
                  require("../assets/addPlayersBackdrop.png")
                }
              />
              <View style={styles.playersContainer}>
              <TouchableOpacity onPress={this._addPlayer}>
                <Image style={styles.playerIconStyle}
                  source={
                    require("../assets/catesIphone.png")
                  }/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._addPlayer}>
                <Image style={styles.playerIconStyle}
                  source={
                    require("../assets/juliasIphone.png")
                  }/>
              </TouchableOpacity>
              </View>
              <View style={styles.questionsContainer}><Text style={styles.text}>Adding {this.state.clickedPlayer} to the game...</Text></View>
              <TouchableOpacity style={styles.nextContainer} onPress={this._nextQuestion}>
                <Image style={styles.imageStyle}
                  source={
                    require("../assets/next.png")
                  }/>
              </TouchableOpacity>
            </View>
          <HelpButton navigation={navigation}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    alignItems: "stretch",
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width:"100%"
  },
  questionsContainer: {
    display: "flex",
    width: 200,
    flexWrap: "wrap",
    width: "100%",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  playersContainer: {
    display: "flex",
    width: 200,
    flexWrap: "wrap",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 300,
  },
  text: {
    fontSize: 30
  },
  nextContainer: {
    position: "absolute",
    marginTop: 700

  },
  imageStyle: {
    height: 20, 
    width: 50, 
    marginLeft: 300, 
    marginBottom: 73
  },
  playerIconStyle: {
    height: 100, 
    width: 100, 
    marginBottom: 150
  },
});
