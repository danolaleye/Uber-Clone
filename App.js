/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { StatusBar, PermissionsAndroid, Platform } from "react-native";
import * as Location from "expo-location";
// import Geolocation from "@react-native-community/geolocation";

import { withAuthenticator } from "aws-amplify-react-native";

import Router from "./src/navigation/Root";

// navigator.geolocation = require("@react-native-community/geolocation");

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);

// const App: () => React$Node = () => {
//   const androidPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "UberClone App Location Permission",
//           message:
//             "UberClone App needs access to your location " +
//             "so you can take awesome rides.",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use the location");
//       } else {
//         console.log("Location permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     if (Platform.OS === "android") {
//       androidPermission();
//     } else {
//       // IOS
//       Geolocation.requestAuthorization();
//     }
//   }, []);

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <Router />
//     </>
//   );
// };

// export default App;
