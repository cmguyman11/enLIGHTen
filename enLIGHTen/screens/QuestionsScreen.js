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


export default class QuestionsScreen extends React.Component {

  _nextQuestion(map) {
    Alert.alert(map.get("funny")[0]);
  }

  render() {
    const navigation = this.props.navigation;
    var map = new HashMap();
    const acedemic = ["Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality, or is it subjective?", "What is the purpose of art?"];
    const people = ["Which of your friends or family members are you most like and why?", "How do you think you’ve changed in the last month or year?"];
    const funnyStuff = ["If you drop soap on the floor, is the floor clean or is the soap dirty?", "If you get out of the shower clean, then how does your towel get dirty?" ];
    const surprise = ["Do you think Aliens exist? If so, why haven’t they contacted us? If not, why?"];
    map.set("acedemic", acedemic);
    map.set("people", people);
    map.set("funny", funnyStuff);
    map.set("surprise", surprise);
    return (
      <View style={styles.container}>

           <View style={styles.welcomeContainer}>
            <Image style={{height: 650, width: 430}}
              source={
                require("../assets/questionsBackdrop.png")
              }
            />
            <TouchableOpacity onPress={() => this._nextQuestion(map)}>
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
  contentContainer: {
  },
  welcomeContainer: {
  },
  welcomeImage: {
    flex: 1,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
});
