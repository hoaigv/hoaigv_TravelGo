import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            rooms: rooms,
            adults: adults,
            children: children,
            selectedDates: selectedDates,
          })
        }
        style={{
          margin: 15,
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              height: height / 2.7,
              width: width - 265,
              borderRadius: 10,
            }}
            source={{ uri: property.photos[0].image }}
          />
        </View>
        <View style={{ padding: 10, flex: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: 180,
                height: 50,
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {property.name}
            </Text>
            <Ionicons name="checkmark-circle" size={24} color="#009694" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="star" size={24} color="#f9db00" />
            <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: 5 }}>
              {property.rating}
            </Text>
            <View
              style={{
                backgroundColor: "#009694",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
                marginLeft: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, color: "white", textAlign: "center" }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 200,
              marginTop: 6,
              color: "#2db0ac",
              fontWeight: "400",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50) + "..."
              : property.address}
          </Text>
          <Text style={{ marginTop: 2, fontSize: 14, fontWeight: "400" }}>
            {" "}
            Price for 1 Night and {adults} adults :
          </Text>
          <View
            style={{ marginTop: 5, flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                color: "#e17a8d",
                fontSize: 16,
                textDecorationLine: "line-through",
              }}
            >
              ${property.oldPrice * adults}
            </Text>
            <Text style={{ marginLeft: 10 }}>
              ${property.newPrice * adults}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#009694",
              paddingVertical: 2,
              marginTop: 5,
              borderRadius: 5,
              width: 175,
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Good the monent
            </Text>
            <MaterialCommunityIcons
              name="robot-love"
              size={24}
              color="white"
              style={{ marginLeft: 7 }}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
