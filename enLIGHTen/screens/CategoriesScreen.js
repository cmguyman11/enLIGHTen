import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, TouchableOpacity, Text, Image  } from 'react-native';
import HelpButton from '../components/HelpButton'

export default class CategoriesScreen extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image style={{width: 400, height: 150}}
              source={
                require("../assets/pickCategory.png")
              }
            />
          </View>
        <View style={styles.buttonContiner}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>acedemic</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>people</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>funny stuff</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>surprise me</Text>
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
