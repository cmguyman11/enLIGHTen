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
import SinglePlayerModeScreen from './screens/SinglePlayerModeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import HelpScreen from './screens/HelpScreen';
import VibeScreen from './screens/VibeScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import SinglePlayerQuestionsScreen from './screens/SinglePlayerQuestionsScreen';
import AddPlayersScreen from './screens/AddPlayersScreen';

import HelpButton from './components/HelpButton';


class HomeScreen extends React.Component {

  render() {
    const navigation = this.props.navigation;
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
          <HelpButton navigation={navigation}/>
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
  Vibes: {
    screen: VibeScreen
  },
  Questions: {
    screen: QuestionsScreen
  },
  AddPlayers: {
    screen: AddPlayersScreen
  },
  SinglePlayerMode: {
    screen: SinglePlayerModeScreen
  },
  SinglePlayerQuestions: {
    screen: SinglePlayerQuestionsScreen
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
