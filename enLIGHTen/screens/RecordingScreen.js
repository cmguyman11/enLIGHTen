import React from 'react';
import { WebBrowser } from "expo";
import HelpButton from '../components/HelpButton'
import { Content } from 'native-base';
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
  ImageBackground,
  TextInput,
  Animated
} from "react-native";
var HashMap = require('hashmap');

const statics = {
    acedemic: ["Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What is the purpose of art?", "What is the best way to explore human nature: psychology, philosophy, or biology?", "“Clear thinking requires courage rather than intelligence.” - Thomas Szasz. What do you think he’s saying? Do you agree?", "Did humans invent math, or did we discover it?", "What do you think are the benefits of capitalism? What are the downsides?", "Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?" ],
    people: ["Which of your friends or family members are you most like and why?", "How do you think you’ve changed in the last month or year?", "Is tribalism learned or innate? How can we overcome it?", "Are humans better at creation or destruction?", "What is the strangest belief that most people have?", "What would this group be surprised to learn about you?", "If you could describe your personality with a song, which one would you choose?", "How do you think you’ve changed in the last month or year?"],
    funnyStuff: ["If you drop soap on the floor, is the floor clean or is the soap dirty?", "If you get out of the shower clean, then how does your towel get dirty?", "Do you believe in any conspiracy theories? Why or why not?", "Tell me about your last poop.", "What was your last embarrassing moment?"],
    surprise: ["Do you think Aliens exist? If so, why haven’t they contacted us? If not, why?", "What do you think happens after you die?", "Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What causes beautiful sunsets? What’s the best sunset you’ve seen?", "What do dogs think about?", "Try to describe a new color.", ],
}

export default class RecordingScreen extends React.Component {


  constructor(props) {
    super(props);
    this._nextQuestion = this._nextQuestion.bind(this);
    this.__showAnimation = this.__showAnimation.bind(this);
    const category = this.props.navigation.state.params.category;
    var map = new HashMap();
    map.set("acedemic", statics.acedemic);
    map.set("people", statics.people);
    map.set("funny", statics.funnyStuff);
    map.set("surprise", statics.surprise);
    var questions = map.get(category);
    var nextQuestion = questions[Math.floor(Math.random()*questions.length)];
    this.state = { question: nextQuestion, category: category, map: map, text: "", anim: new Animated.Value(1)};
  }

  animationState = {
    fadeAnim: new Animated.Value(0)  // Initial value for opacity: 0
  }

  _nextQuestion() {
    var map = this.state.map;
    var category = this.state.category;
    var questions = map.get(category);
    var nextQuestion = questions[Math.floor(Math.random()*questions.length)];
    this.setState(previousState => ({ question : nextQuestion}));
  }

  _saveResponse() {
  	Alert.alert("Response saved!");
  }

  __showAnimation() {
    Animated.timing(
      this.state.anim,
      {
        toValue: 400,
        duration: 2000,
      }
    ).start();  
  }

  render() {
    const navigation = this.props.navigation;
    let { anim } = this.state.anim;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <ImageBackground style={{height: 750, width: 430, position: "absolute"}}
            source={
              require("../assets/recordingBackdrop.png")
            }
          />
          <View style={styles.questionsContainer}><Text style={styles.text}>{this.state.question}</Text></View>
          <View>
           <TouchableOpacity style={{marginTop: 20, marginLeft: 300}} onPress={this._saveResponse}>
            <Image style={styles.addImageStyle}
              source={
                require("../assets/saveIcon.png")
              }/>
          </TouchableOpacity>
          <View style={{height: 150, marginTop: 30}}>
            <ImageBackground style={{height: 120}}
              source={
                require("../assets/recording.png")
              }/>
              <Animated.View style={{marginTop: 5, position: "absolute", left: this.state.anim}}>
                <Image style={{width: 10, height: 100}}
                source={ 
                  require("../assets/blueLine.png")
                }/>
              </Animated.View>
            <TouchableOpacity style={{marginTop: 10, marginLeft: 180}} onPress={this.__showAnimation}>
            <Image style={{width: 50, height: 50}}
              source={
                require("../assets/recordIcon.png")
              }/>
          </TouchableOpacity>
        </View>
         </View>
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
    height: "100%",
    width:"100%"
  },
  questionsContainer: {
    display: "flex",
    width: 200,
    height: 210,
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
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
    height: 40, 
    width: 40, 
  },
  homeStyle: {
    height: 35,
    width: 35,
    marginRight: 10
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
    marginTop: 90,
  },
  iconsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 150,
  },
  imageStyle: {
    height: 20, 
    width: 50, 
    marginLeft: 300, 
    marginBottom: 73
  },
  playerIconStyle: {
    height: 75, 
    width: 75, 
    marginBottom: 150
  },
});