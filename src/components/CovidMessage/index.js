import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Let's all play a role to limit the spread. Wear a Mask!
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
