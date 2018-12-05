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

const allPlayers = [
  {name: "Julia", image: require("../assets/juliasIphone.png"), highlightedImage: require("../assets/juliasIphoneHighlighted.png")},
  {name: "Cate", image: require("../assets/catesIphone.png"), highlightedImage: require("../assets/catesIphoneHighlighted.png")},
  {name: "Sachi", image: require("../assets/sachisIphone.png"), highlightedImage: require("../assets/sachisIphoneHighlighted.png")},
]

function Players(props) {
  const currPlayers = allPlayers.filter(p => props.playersOutOfGame.includes(p.name));
  const content = currPlayers.map((player) =>
    <View key={player.name}>
    <TouchableOpacity onPress={() => {
        props.func(player)
      }}>
      <Image style={styles.playerIconStyle}
        source={
          player.image
        }/>
    </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.playersContainer}>
    {content}
    </View>
  );
}

export default class AddPlayerScreen extends React.Component {

  constructor(props) {
    super(props);
    const category = this.props.navigation.state.params.category;
    const mode = this.props.navigation.state.params.mode;
    const playersOutOfGame = this.props.navigation.state.params.playersOutOfGame;
    const playersInGame = this.props.navigation.state.params.playersInGame;
    this.state = {text: "", category: category, mode: mode, 
    playersInGame: playersInGame, playersOutOfGame: playersOutOfGame};
  }

  _addPlayers(player) {
    const text = "Adding " + player.name + " to the game...";
    this.setState(prevState => ({
        playersOutOfGame: (prevState.playersOutOfGame.filter(p => p != player.name )), playersInGame: prevState.playersInGame.concat(player.name), text: text
    }));
    setInterval(() => (
      this.setState(previousState => (
        { text: "" }
      ))
    ), 1000);
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
              <Players func={this._addPlayers.bind(this)} playersOutOfGame={this.state.playersOutOfGame}/>
              <View style={styles.questionsContainer}><Text style={styles.text}>{this.state.text}</Text></View>
              <TouchableOpacity style={styles.nextContainer} onPress={() => {
                  this.props.navigation.navigate('Questions', {mode: this.state.mode, category: this.state.category, playersOutOfGame: this.state.playersOutOfGame, playersInGame: this.state.playersInGame})
                }}>
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
