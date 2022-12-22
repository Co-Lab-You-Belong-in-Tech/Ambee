import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch, Title } from "react-native-paper";
import React, { useState, useEffect } from "react";
import Counter from "../../components/counter";
import HomeSettings from "../../components/homeSettings";

const Settings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [newTimer, setNewTimer] = useState(30);
  const [newLimit, setNewLimit] = useState(5);
  useEffect(() => {
    console.log(newTimer, "settings timer");
  }, [newTimer]);
  return (
    <View style={styles.settingsBox}>
      <Title style={styles.cardTitle}>Settings</Title>
      <View style={styles.counterLabel}>
        <View>
          <Text style={styles.settingsTxt}>Limit your option</Text>
          <Text style={styles.settingsTxt}>Set a timer</Text>
        </View>
        <Counter
          newTimer={newTimer}
          setNewTimer={setNewTimer}
          newLimit={newLimit}
          setNewLimit={setNewLimit}
        />
      </View>

      <View style={styles.repeatContainer}>
        <Title style={styles.settingsTxt}>No repeating mode</Title>

        <View style={styles.bottomSettingsIcons}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>

      <HomeSettings navigation={navigation} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsBox: {
    marginHorizontal: 30,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  repeatContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 290,
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 200,
  },
  homeSettingBox: {
    alignItems: "center",
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
  homeContainer: {
    marginRight: 32,
  },
  pickBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 19,
    marginVertical: 18,
  },
  counterLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSettingsIcons: {
    marginRight: 33,
  },
  check: {
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 6,
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
});
