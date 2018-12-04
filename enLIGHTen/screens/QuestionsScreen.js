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
    acedemic: ["Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What is the purpose of art?", "What is the best way to explore human nature: psychology, philosophy, or biology?", "“Clear thinking requires courage rather than intelligence.” - Thomas Szasz. What do you think he’s saying? Do you agree?", "Did humans invent math, or did we discover it?", "What do you think are the benefits of capitalism? What are the downsides?", "Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?" ],
    people: ["Which of your friends or family members are you most like and why?", "How do you think you’ve changed in the last month or year?", "Is tribalism learned or innate? How can we overcome it?", "Are humans better at creation or destruction?", "What is the strangest belief that most people have?", "What would this group be surprised to learn about you?", "If you could describe your personality with a song, which one would you choose?", "How do you think you’ve changed in the last month or year?"],
    funnyStuff: ["If you drop soap on the floor, is the floor clean or is the soap dirty?", "If you get out of the shower clean, then how does your towel get dirty?", "Do you believe in any conspiracy theories? Why or why not?", "Tell me about your last poop.", "What was your last embarrassing moment?"],
    surprise: ["Do you think Aliens exist? If so, why haven’t they contacted us? If not, why?", "What do you think happens after you die?", "Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What causes beautiful sunsets? What’s the best sunset you’ve seen?", "What do dogs think about?", "Try to describe a new color.", ],
}

export default class QuestionsScreen extends React.Component {

  constructor(props) {
    super(props);
    this._nextQuestion = this._nextQuestion.bind(this);
    const category = this.props.navigation.state.params.category;
    const mode = this.props.navigation.state.params.mode;
    var map = new HashMap();
    map.set("acedemic", statics.acedemic);
    map.set("people", statics.people);
    map.set("funny", statics.funnyStuff);
    map.set("surprise", statics.surprise);
    var questions = map.get(category);
    var nextQuestion = questions[Math.floor(Math.random()*questions.length)];
    this.state = { question: nextQuestion, category: category, mode: mode, map: map };
  }

  _nextQuestion() {
    var map = this.state.map;
    var category = this.state.category;
    var questions = map.get(category);
    var nextQuestion = questions[Math.floor(Math.random()*questions.length)];
    this.setState(previousState => ({ question : nextQuestion}));
  }

  _addPlayer() {
    //TODO add "curr player"
    Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
);
    var map = this.state.map;
    var category = this.state.category;
    this.props.navigation.navigate('AddPlayers', {mode: mode, category: category, player: ""});
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
           <View style={styles.welcomeContainer}>
              <ImageBackground style={{height: 650, width: 430, position: "absolute"}}
                source={
                  require("../assets/questionsBackdrop.png")
                }
              />
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('AddPlayers', {mode: this.state.mode, category: this.state.category, player: ""})
            }}>
                <Image style={styles.addImageStyle}
                  source={
                    require("../assets/addPlayersButton.png")
              }/>
              </TouchableOpacity>
              <View style={styles.questionsContainer}><Text style={styles.text}>{this.state.question}</Text></View>
              <TouchableOpacity style={styles.nextContainer} onPress={this._nextQuestion}>
                <Image style={styles.nextImageStyle}
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
    alignItems: "flex-end",
    height: "100%",
    width:"100%"
  },
  questionsContainer: {
    display: "flex",
    width: 200,
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 30
  },
  nextContainer: {
    position: "absolute",
    marginTop: 700,
    marginRight: 25
  },
  addPlayerContainer: {
    position: "absolute",
    marginTop: 5,
  },
  nextImageStyle: {
    height: 20, 
    width: 50, 
    marginLeft: 300, 
    marginBottom: 73
  },
  addImageStyle: {
    height: 50, 
    width: 50, 
    marginLeft: 300, 
    marginBottom: 73
  },
});
