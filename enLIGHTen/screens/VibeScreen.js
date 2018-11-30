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
import { WebBrowser } from "expo";
import HelpButton from '../components/HelpButton'


export default class VibeScreen extends React.Component {
  render() {
      const navigation = this.props.navigation;
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
   buttonContainer: {
    marginTop: 500,
    marginLeft: 100,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    marginBottom: 30,
    width: 200,
    height: 80,
    alignItems: 'center',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 4,
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'red',
    paddingBottom: 10,
  },
});