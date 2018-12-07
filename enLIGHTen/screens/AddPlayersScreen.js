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
import NavBar from '../components/NavBar';


const allPlayers = [
  {name: "Julia", image: require("../assets/juliasIphoneAirdrop.png"), highlightedImage: require("../assets/juliasIphoneHighlighted.png")},
  {name: "Cate", image: require("../assets/catesIphoneAirdrop.png"), highlightedImage: require("../assets/catesIphoneHighlighted.png")},
  {name: "Sachi", image: require("../assets/sachisIphoneAirdrop.png"), highlightedImage: require("../assets/sachisIphoneHighlighted.png")},
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

function PlayersAlreadyInGame(props) {
  const currPlayers = allPlayers.filter(p => props.playersInGame.includes(p.name));
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
    <View style={styles.playersInGameContainer}>
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
    this.state = {category: category, mode: mode, 
    playersInGame: playersInGame, playersOutOfGame: playersOutOfGame};

  }

  _addPlayers(player) {
    const text = "Added " + player.name + " to the game!";
    this.setState(prevState => ({
        playersOutOfGame: (prevState.playersOutOfGame.filter(p => p != player.name )), playersInGame: prevState.playersInGame.concat(player.name)
    }));
    Alert.alert(text);
  }

  _removePlayers(player) {
    const text = "Removed " + player.name + " from the game!";
    this.setState(prevState => ({
        playersInGame: (prevState.playersInGame.filter(p => p != player.name )), playersOutOfGame: prevState.playersOutOfGame.concat(player.name)
    }));
    Alert.alert(text);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
           <NavBar navigation={navigation} page={"AddPlayers"} mode={""} category={""} playersOutOfGame={""} playersInGame={""}/>
           <View style={styles.welcomeContainer}>
              <ImageBackground style={{height: 650, width: 430, position: "absolute"}}
                source={
                  require("../assets/addPlayersBackdrop.png")
                }
              />
              <Players func={this._addPlayers.bind(this)} playersOutOfGame={this.state.playersOutOfGame}/>
              <View style={{height: 50, width: "100%", marginLeft: 40}}>
              <ImageBackground style={styles.playersInGameImageContainer}
                source={
                  require("../assets/currentPlayers.png")
                }
              />
              <PlayersAlreadyInGame func={this._removePlayers.bind(this)} playersInGame={this.state.playersInGame}/>
              </View>
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
  playersInGameImageContainer: {
    resizeMode: "contain",
    height: 200,
    width: 400,
    position: "absolute",
  },
  playersInGameContainer: {
    display: "flex",
    width: 200,
    flexWrap: "wrap",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 200,
  },
  text: {
    fontSize: 30
  },
  nextContainer: {
    position: "absolute",
    marginTop: 650
  },
  imageStyle: {
    height: 20, 
    width: 50, 
    marginLeft: 300, 
    marginBottom: 200,
  },
  playerIconStyle: {
    height: 100, 
    width: 100, 
    marginBottom: 150
  },
});

