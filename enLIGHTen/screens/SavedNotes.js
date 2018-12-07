import React from "react";
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Body
} from "native-base";
import HelpButton from "../components/HelpButton";
import NavBar from "../components/NavBar";

import VibeScreen from "./VibeScreen";

let fakePreviews = [
  {
    title: "Question Example",
    preview: "I'm not sure what to think about this question..."
  },
  { title: "Question Example", preview: "Hello. This is Sachi" },
  { title: "Question Example", preview: "Hello. This is Sachi" },
  { title: "Question Example", preview: "Hello. This is Sachi" },
  { title: "Question Example", preview: "Hello. This is Sachi" },
  { title: "Question Example", preview: "Hello. This is Sachi" },
  { title: "Question Example", preview: "Hello. This is Sachi" }
];

export default class SavedNotesScreen extends React.Component {
  customListItem = (title, preview) => {
    return (
      <ListItem itemHeader first>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Notepad", {
              category: "acedemic",
              existingQuestion: title,
              existingText: preview
            });
          }}
        >
          <Body>
            <Text>{title}</Text>
            <Text note style={styles.date}>
              Dec 3, 2018
            </Text>
            <Text note>{preview}</Text>
          </Body>
        </TouchableOpacity>
      </ListItem>
    );
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Text style={styles.headerText}>Saved Notes</Text>
        <TouchableOpacity
          style={{marginLeft: 350 }}
          onPress={() => {
            this.props.navigation.navigate("Notepad",  {category: "surprise"})
          }}
          >
          <Image
            style={styles.addImageStyle}
            source={require("../assets/newNoteIcon.png")}
          />
        </TouchableOpacity>
        <Content>
          <List>
            {fakePreviews.map(entry =>
              this.customListItem(entry.title, entry.preview)
            )}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    paddingLeft: 15,
    paddingTop: 5
  },
  date: {
    fontWeight: "normal"
  },
  addImageStyle: {
    height: 30,
    width: 30
  },
});
