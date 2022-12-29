import React, { useState } from "react";
import { Card, Title } from "react-native-paper";
import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GenreDropdown from "../../components/genreDropdown";

const Genres = ({ navigation }) => {
  const window = useWindowDimensions();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const storeData = async (value) => {
    console.log(value, "value");
    try {
      await AsyncStorage.setItem("@userGenres", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>What type of movies do you like?</Title>
        <View style={styles.cardContent}>
          <View style={styles.picContainer}>
            <Card.Cover
              style={styles.cardPic}
              resizeMode="contain"
              source={require("../../assets/icons/Question.png")}
            />
          </View>
          <GenreDropdown
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </View>
      </Card.Content>
      <TouchableOpacity
        onPress={() => {
          if (selectedGenres.length == 0) {
            Alert.alert("Please Choose At Least One Genre");
          } else {
            navigation.navigate("HowManyCards");
            storeData(selectedGenres);
          }
        }}
      >
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContent: {
    marginHorizontal: "1%",
  },
  cardTitle: {
    textAlign: "center",
    // marginHorizontal: 10,
    marginTop: "12%",
    marginBottom: "12%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },
});
export default Genres;