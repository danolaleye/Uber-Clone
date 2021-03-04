import React, { useState } from "react";
import { View, Dimensions, Alert } from "react-native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";
import { createOrder } from "../../graphql/mutations";

import { useRoute, useNavigation } from "@react-navigation/native";

const SearchResults = (props) => {
  const typeState = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  // console.log(route.params.originPlace.details.geometry.location.lat);
  const { originPlace, destinationPlace } = route.params;
  // console.log(destinationPlace);

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: "1",
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input,
        })
      );

      Alert.alert(
        "Arriving Soon",
        "Dan is arriving soon in a Hyundai Sonata (CKCK-367281). Please wear a mask!",
        [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Home"),
          },
        ]
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 450 }}>
        <RouteMap origin={{ originPlace }} destination={{ destinationPlace }} />
      </View>

      <View style={{ height: 400 }}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
