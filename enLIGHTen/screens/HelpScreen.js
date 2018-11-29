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


export default class HelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.welcomeContainer}>
          <ImageBackground
              style={{height: 750, width: 420}}
              source={
                require("../assets/help.png")
              }
            resizeMode="contain"
          >
        <TouchableOpacity onPress={() => {
            }} style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Call for Help</Text>
          </View>
        </TouchableOpacity>
          </ImageBackground>
        </View>
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