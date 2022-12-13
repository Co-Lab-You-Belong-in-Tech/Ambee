import * as React from "react";
import { Button, Card, Title, TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";

const NameBee = ({ navigation }) => {
  const window = useWindowDimensions();
  const [text, setText] = React.useState("");
  return (
    <Card style={styles.cardContainer} height={window.height}>
      <TouchableOpacity onPress={() => navigation.navigate("StepOne")}>
        <Skip />
      </TouchableOpacity>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <Title style={styles.cardTitle}>What is the name of your bee?</Title>
      </Card.Content>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        placeholderTextColor="#FF6033"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("StepOne")}>
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: { borderRadius: 0 },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  cardPic: {
    height: 225,
    width: 225,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 60,
  },

  continueBtn: {
    marginHorizontal: 90,
    // marginBottom: 130,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  input: {
    marginHorizontal: 90,
    marginBottom: 90,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#FF6033",
  },
});

export default NameBee;