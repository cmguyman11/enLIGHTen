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
  Alert,
  ImageBackground
} from "react-native";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 5, isCountingDown: false };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    this.setState({ isCountingDown: true });
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
      this.setState({ isCountingDown: false, seconds: 5 });
      this.timer = 0;
      Alert.alert("Times up! Keep talking or click next question.");
    }
  }


  render() {
    if (!this.state.isCountingDown) {
    return(
      <View>
        <TouchableOpacity onPress={this.startTimer}>
            <Image style={styles.addImageStyle}
              source={
                require("../assets/timerIcon.png")
          }/>
       </TouchableOpacity>
      </View>
    );
  } else {
      return(
      <View>
        <Text> {this.state.time.m} : {this.state.time.s}</Text>
      </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  addImageStyle: {
    height: 45, 
    width: 45, 
  },
});
