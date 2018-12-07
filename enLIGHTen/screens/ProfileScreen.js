import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, TouchableOpacity, Text, Image  } from 'react-native';
import HelpButton from '../components/HelpButton'
import NavBar from '../components/NavBar'


export default class ProfileScreen extends React.Component {

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.container}>
        <NavBar navigation={navigation} page={""} mode={"single"} category={""} playersOutOfGame={""} playersInGame={""}/>
        <View style={styles.imageContainer}>
         <Image style={{width: 400, height: 600}}
              source={
                require("../assets/profileBackdrop.png")
              }
            />
          </View>
        <View style={styles.buttonContiner}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Notepad', {mode: "single", function: "notepad", category: "surprise"})
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>my notes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            navigation.navigate('Recording', {mode: "single", function: "voice", category: "surprise"})
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>my recordings</Text>
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
  },
});
