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
import { Footer } from 'native-base';

import { WebBrowser } from "expo";


export default class HelpButton extends React.Component {
  render() {
    return (
      <Footer>
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Help')
            }}>
          <View>
            <Text>Not feeling well? Swipe up for help.</Text>
          </View>
        </TouchableOpacity>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
 
});