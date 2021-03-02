import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyCSQuDD1BGDXws-OA2-DYPQFi8OlB2INMc";

const RouteMap = ({ origin, destination }) => {
  console.log(
    "Lati --" + JSON.stringify(origin.originPlace.details.geometry.location.lng)
    // "Longi --" +
    //   JSON.stringify(origin.originPlace.details.geometry.location.lat)
  );
  // console.log("Lagi --" + JSON.stringify(destination));

  const originLoc = {
    latitude: parseFloat(
      JSON.stringify(origin.originPlace.data.geometry.location.lat)
    ),
    longitude: parseFloat(
      JSON.stringify(origin.originPlace.data.geometry.location.lng)
    ),
  };
  console.log("locloc is --> " + JSON.stringify(originLoc));
  const destinationLoc = {
    latitude: parseFloat(
      JSON.stringify(destination.destinationPlace.details.geometry.location.lat)
    ),
    longitude: parseFloat(
      JSON.stringify(destination.destinationPlace.details.geometry.location.lng)
    ),
  };

  const originn = { latitude: 37.3318456, longitude: -122.0296002 };
  const destinationn = { latitude: 37.771707, longitude: -122.4053769 };

  console.log(originn);

  // console.log("Lati --" + originLoc);
  // const originLoc = {
  //   latitude: origin.details.geometry.location.lat,
  //   longitude: origin.details.geometry.location.lng,
  // };

  // const destinationLoc = {
  //   latitude: destination.details.geometry.location.lat,
  //   longitude: destination.details.geometry.location.lng,
  // };

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={originn}
        destination={destinationn}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={originn} title={"Origin"} />
      <Marker coordinate={destinationn} title={"Destination"} />
    </MapView>
  );
};

export default RouteMap;
