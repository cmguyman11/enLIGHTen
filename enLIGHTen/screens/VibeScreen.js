import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { Slider } from 'react-native-elements'
import { WebBrowser } from "expo";
import HelpButton from '../components/HelpButton'


export default class VibeScreen extends React.Component {
  render() {
      const navigation = this.props.navigation;
      const value = 0.3;
      const category = navigation.state.params.category;
      const mode = navigation.state.params.mode;
      const func = navigation.state.params.function;
    return (
      <View style={styles.container}>
      <View style={styles.container}>
            <View style={styles.welcomeContainer}>
          <ImageBackground
              style={{height: 750, width: 420}}
              source={
                require("../assets/vibeScreen.png")
              }
            resizeMode="contain"
          >
        <View style={styles.sliderStyle}>
        <Slider
          value={value}
          onValueChange={(value) => {}} 
          orientation="vertical"
          thumbTintColor="white"/>
      </View>
      <TouchableOpacity onPress={() => {
              if (mode == "multi") {
                  this.props.navigation.navigate('Questions', {mode: mode, category: category, playersInGame:["Sachi"], playersOutOfGame:["Julia", "Cate"], highlightedPlayer: "Sachi"})
              } else if (func == "questions") {
                  this.props.navigation.navigate('SinglePlayerQuestions', {mode: mode, category: category, playersInGame:["Sachi"], playersOutOfGame:["Julia", "Cate"], highlightedPlayer: "Sachi"})
              } else if (func == "voice") {

              } else if (func == "notepad") {
                this.props.navigation.navigate('Notepad', {category: category});
              }
            }}>
            <Image style={{height: 20, width: 50, marginLeft: 335, marginBottom: 73}}
              source={
                require("../assets/next.png")
              }/>
      </TouchableOpacity>
          </ImageBackground>
        </View>
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
    marginLeft: -10
  },
  sliderStyle: {
    flex: 1, 
    alignItems: 'stretch', 
    width: 420, 
    justifyContent: 'center',
    marginTop: 215,
    marginLeft: 50,
    color: "white"
  }
});