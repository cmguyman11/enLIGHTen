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
    title: "What's your biggest fear",
    preview: "I'm not sure what to think about this question..."
  },
  {
    title: "If people evolved from monkeys, why do we still have monkeys?",
    preview:
      "This question really makes me think about our ancestors. I heard somewhere that we share 93% of our dna profile with the Rhesus monkey. It's very weird to think that just 7% separates my life from his. What a strange world."
  },
  {
    title: "Can people change?",
    preview:
      "Absolutely. I used to be very afraid of swimming, and it really carried over into other parts of my life. I would cancel trips and avoid gatherings where I would be around water..."
  },
  {
    title: "What is one thing you would want to change about yourself?",
    preview:
      "If I had the option, I don't think I would really change anything... I really enjoy who I am, and all the bad parts of me have served to teach me lessons..."
  },
  {
    title: "What is your biggest regret?",
    preview: "I want to come back to this question later..."
  },
  {
    title:
      "Can two people ever really know eachother as deeply as one can know themselves?",
    preview: "Hmm.. I would say no, except I wish the answer was yes..."
  },
  {
    title: "Do you think the human race is evolving morally?",
    preview: "Save for later. Bring up with dad at dinner on Monday"
  }
];

export default class CategoriesScreen extends React.Component {
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
    const category = this.props.navigation.state.params.category;
    return (
      <Container>
        <NavBar
          navigation={navigation}
          page={"SavedNotes"}
          mode={"single"}
          category={category}
          playersOutOfGame={""}
          playersInGame={""}
        />
        <Text style={styles.headerText}>Saved Notes</Text>
        <Content>
          <List>
            {fakePreviews.map(entry =>
              this.customListItem(entry.title, entry.preview)
            )}
          </List>
        </Content>
       <HelpButton navigation={navigation}/>
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
});
