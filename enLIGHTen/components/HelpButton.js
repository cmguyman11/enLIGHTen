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


export default class HelpButton extends React.Component {
  render() {
    return (
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Help')
            }}>
          <View>
            <Text>Not feeling well? Swipe up for help.</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
 
});