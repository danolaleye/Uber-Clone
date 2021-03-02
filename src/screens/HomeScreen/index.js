import React from "react";
import { View, Dimensions, SafeAreaView } from "react-native";

import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={{ height: Dimensions.get("window").height - 450 }}>
        <HomeMap />
      </View>

      {/*  Covid Message*/}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
    </SafeAreaView>
  );
};

export default HomeScreen;
