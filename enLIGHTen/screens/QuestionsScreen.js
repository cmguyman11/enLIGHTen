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
import { createStackNavigator, createAppContainer } from "react-navigation";

import HelpButton from '../components/HelpButton';


export default class QuestionsScreen extends React.Component {

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>

           <View style={styles.welcomeContainer}>
            <Image style={{height: 750, width: 430}}
              source={
                require("../assets/questionsBackdrop.png")
              }
            />
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
