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
  Alert
} from "react-native";
import { WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
var HashMap = require('hashmap');

import HelpButton from '../components/HelpButton';

const statics = {
    acedemic: ["Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What is the purpose of art?"],
    people: ["Which of your friends or family members are you most like and why?", "How do you think you’ve changed in the last month or year?"],
    funnyStuff: ["If you drop soap on the floor, is the floor clean or is the soap dirty?", "If you get out of the shower clean, then how does your towel get dirty?" ],
    surprise: ["Do you think Aliens exist? If so, why haven’t they contacted us? If not, why?"],
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

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>

           <View style={styles.welcomeContainer}>
            <Image style={{height: 650, width: 430}}
              source={
                require("../assets/questionsBackdrop.png")
              }
            />
            <View style={styles.questionsContainer}><Text>{this.state.question}</Text></View>
            <TouchableOpacity onPress={this._nextQuestion}>
            <Image style={{height: 20, width: 50, marginLeft: 300, marginBottom: 73}}
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
    backgroundColor: "white"
  },
  questionsContainer: {
    width: 350,
    height: 30,
  },
  welcomeImage: {
    flex: 1,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
});
