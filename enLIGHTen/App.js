import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { WebBrowser } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

           <TouchableOpacity style={styles.welcomeContainer} onPress={() => {
              navigate("Links");
            }}>
            <Image style={{height: 850, width: 430}}
              source={
                require("./assets/clouds.png")
              }
            />

            </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  contentContainer: {
    paddingTop: 30
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
