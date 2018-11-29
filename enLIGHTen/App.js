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
import ModeScreen from './screens/ModeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import HelpScreen from './screens/HelpScreen';

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

           <TouchableOpacity style={styles.welcomeContainer} onPress={() => {
              this.props.navigation.navigate('Mode')
            }}>
            <Image style={{height: 750, width: 430}}
              source={
                require("./assets/clouds.png")
              }
            />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Help')
            }}>
          <View>
            <Text>Not feeling well? Swipe up for help.</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Mode: {
    screen: ModeScreen
  },
  Categories: {
    screen: CategoriesScreen
  },
  Help: {
    screen: HelpScreen
  },
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
