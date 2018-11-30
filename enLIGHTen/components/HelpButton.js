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
      <Footer style={styles.container}>
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Help')
            }}>
            <Image style={{height: 30, width: 415}}
              source={
                require("../assets/helpbutton.png")
              }
            />
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