import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CartScreen = () => {
  const bookings = [
    {
      name: "Paris",
      image:
        "https://eurotravel.com.vn/wp-content/uploads/2023/02/1-C5ku90hs.jpg",
      rooms: 3,
      newPrice: 200,
      startDate: "2023-06-01",
      endDate: "2023-06-05",
    },
    {
      name: "New York",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/402px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
      rooms: 2,
      newPrice: 150,
      startDate: "2023-07-10",
      endDate: "2023-07-15",
    },
    {
      name: "Tokyo",
      image:
        "https://znews-photo.zingcdn.me/w1200/Uploaded/mdf_eioxrd/2020_11_16/a0002533_main.jpg",
      rooms: 1,
      newPrice: 100,
      startDate: "2023-08-20",
      endDate: "2023-08-25",
    },
  ];
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Cart",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#0c5776",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <View>
      <ScrollView>
        {bookings.map((booking, index) => (
          <Pressable key={index} style={styles.booking}>
            <View style={styles.imageContainer}>
              <Text style={styles.name}>{booking.name}</Text>
              <Image source={{ uri: booking.image }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.details}>{`${booking.rooms} phòng`}</Text>
              <Text style={styles.details}>{`${booking.newPrice} đồng`}</Text>
              <Text
                style={styles.details}
              >{`${booking.startDate}  ${booking.endDate}`}</Text>
            </View>
            <View style={styles.cancel}>
              <Pressable style={styles.button}>
                <FontAwesome5
                  style={{ margin: 9 }}
                  name="paypal"
                  size={20}
                  color="#f2e3e0"
                />
              </Pressable>
              <Pressable style={styles.button}>
                <Ionicons
                  style={{ margin: 7 }}
                  name="md-trash-bin"
                  size={20}
                  color="black"
                />
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  booking: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    elevation: 2,
    height: 150,
  },
  imageContainer: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 2,
    padding: 10,
    justifyContent: "center",
    
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine:'underline',
   

  },
  details: {
    fontSize: 15,
    marginBottom: 2,
    
  },
  cancel: {
    flex: 1.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 7,
    backgroundColor: "#2dc2ac",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
