import React from 'react';
import { WebBrowser } from "expo";
import CategoriesScreen from './CategoriesScreen';


import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, TouchableOpacity, Text, Image  } from 'react-native';

//import CategoryScreen from '../screens/ChooseCategoryScreen';


export default class ModeScreen extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image style={{width: 300, height: 300}}
              source={
                require("../assets/letsPlay.png")
              }
            />
          </View>
        <View style={styles.buttonContiner}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Categories')
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>single player</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Categories')
            }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>multi player</Text>
          </View>
        </TouchableOpacity>
       
        </View> 
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
