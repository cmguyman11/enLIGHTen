import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";
import { Footer } from "native-base";

import { WebBrowser } from "expo";
import Timer from "./Timer";

//Lets Play: just profile
// record thoughts: profile, home
// categories: profile, home
// vibe: profile, home
// questions(multi): profile, home, settings, timer, add players
// questions(single): profile, home, settings, timer
// every other page: profile, home, settings

function Home(props) {
  if (props.page != "Mode") {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Mode");
        }}
      >
        <Image
          style={styles.homeStyle}
          source={require("../assets/homeIcon.png")}
        />
      </TouchableOpacity>
    );
  } else {
    return <View />;
  }
}

function Settings(props) {
  var shouldShowBecauseSingle = props.mode == "single" && props.page;
  if (
    props.page != "Category" &&
    props.page != "Mode" &&
    props.page != "Vibe" &&
    props.page != "RecordThoughts"
  ) {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Categories", { mode: props.mode });
        }}
      >
        <Image
          style={styles.homeStyle}
          source={require("../assets/settingsIcon.png")}
        />
      </TouchableOpacity>
    );
  } else {
    return <View />;
  }
}

function TimerIcon(props) {
  if (props.page == "Questions") {
    return <Timer isRecordingsScreen={false} />;
  } else {
    return <View />;
  }
}

function AddPlayers(props) {
  console.log("mode " + props.mode);
  if (props.page == "Questions" && props.mode == "multi") {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("AddPlayers", {
            mode: props.mode,
            category: props.category,
            playersOutOfGame: props.playersOutOfGame,
            playersInGame: props.playersInGame
          });
        }}
      >
        <Image
          style={styles.addImageStyle}
          source={require("../assets/addPlayersButton.png")}
        />
      </TouchableOpacity>
    );
  } else {
    return <View />;
  }
}

export default class NavBar extends React.Component {
  render() {
    const page = this.props.page;
    const navigation = this.props.navigation;
    const category = this.props.category;
    const mode = this.props.mode;
    const playersOutOfGame = this.props.playersOutOfGame;
    const playersInGame = this.props.playersInGame;
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SavedNotes", { mode: mode });
            }}
          >
            <Image
              style={styles.profile}
              source={require("../assets/sachisIphoneHighlighted.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TimerIcon page={page} />
          <AddPlayers
            page={page}
            mode={mode}
            navigation={navigation}
            category={category}
            playersOutOfGame={playersOutOfGame}
            playersInGame={playersInGame}
          />
          <Home page={page} navigation={navigation} />
          <Settings page={page} navigation={navigation} mode={mode} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 450,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  iconsContainer: {
    display: "flex",
    flexWrap: "wrap",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 150
  },
  homeStyle: {
    height: 35,
    width: 35,
    marginRight: 10
  },
  addImageStyle: {
    height: 50,
    width: 50
  },
  profileContainer: {},
  profile: {
    left: 0,
    height: 45,
    width: 45
  }
});
