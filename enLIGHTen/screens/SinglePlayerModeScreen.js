import React from 'react';
import { WebBrowser } from "expo";
import CategoriesScreen from './CategoriesScreen';
import HelpButton from '../components/HelpButton'
import NavBar from '../components/NavBar';

import { Content } from 'native-base';


import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, TouchableOpacity, Text, Image  } from 'react-native';


export default class SinglePlayerModeScreen extends React.Component {

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.container}>
        <NavBar navigation={navigation} page={"RecordThoughts"} mode={""} category={""} playersOutOfGame={""} playersInGame={""}/>
        <View style={styles.imageContainer}>
         <Image style={{width: 300, height: 130, marginTop: 75}}
              source={
                require("../assets/recordThoughts.png")
              }
            />
          </View>
        <View style={styles.buttonContiner}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Categories', {mode: "single", function: "notepad"})
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>notepad</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Categories', {mode: "single", function: "voice"})
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>voice memo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Categories', {mode: "single", function: "questions"})
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>just the questions!</Text>
          </View>
        </TouchableOpacity>
        </View>
        </View>
        <HelpButton navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
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
    color: 'black',
    paddingBottom: 10,
  },
  imageContainer: {
    flex: .6,
  }
});
