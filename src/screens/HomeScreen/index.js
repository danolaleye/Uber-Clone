import React from "react";
import {
  View,
  Dimensions,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";

import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearch";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { StyleSheet } from "react-native";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          zIndex: 1,
          height: 55,
          backgroundColor: "white",
          width: 55,
          padding: 10,
          borderRadius: 25,
        }}
      >
        <Entypo
          onPress={() => navigation.toggleDrawer()}
          name={"menu"}
          size={35}
          color={"#000000"}
        />

        {/* <Button
          title="Toggle drawer"
          onPress={() => navigation.toggleDrawer()}
        /> */}
      </Pressable>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          height: Dimensions.get("window").height - 400,
        }}
      >
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
