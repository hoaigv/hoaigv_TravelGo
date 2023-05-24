import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const FlightResultScreen = () => {
  // Define an array with 10 elements, each with the required properties
  //
  const data = [
    {
      id: 1,
      name: 'Delta Airlines',
      img: 'https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png',
      startPoint: 'New York City',
      endPoint: 'Los Angeles',
      time: '8:00 AM',
      dateTime: 'Sun Jul 10 2023',
      price :555
    },
    {
      id: 2,
      name: 'American Airlines',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/American-Airlines-Logo-800x500.png',
      startPoint: 'New York City',
      endPoint: 'Los Angeles',
      time: '10:00 AM',
      dateTime: 'Sun Jul 10 2023',
       price :555
    },
    {
      id: 3,
      name: 'United Airlines',
      img: 'https://example.com/united.png',
      startPoint: 'San Francisco',
      endPoint: 'Seattle',
      time: '1:15 PM',
      dateTime: 'Wed Dec 27 2023',
      price :555
    },
    {
      id: 4,
      name: 'Southwest Airlines',
      img: 'https://example.com/southwest.png',
      startPoint: 'Denver',
      endPoint: 'Las Vegas',
      time: '6:45 AM',
     dateTime: 'Mon Jan 2 2023',
     price :555
    },
    {
      id: 5,
      name: 'JetBlue Airways',
      img: 'https://example.com/jetblue.png',
      startPoint: 'Boston',
      endPoint: 'Orlando',
      time: '9:20 AM',
      dateTime: 'Sat Apr 8 2023',
      price :555
    },
    {
      id: 6,
      name: 'Alaska Airlines',
      img: 'https://example.com/alaska.png',
      startPoint: 'Seattle',
      endPoint: 'Anchorage',
      time: '2:30 PM',
      dateTime: 'Tue Jun 20 2023',
      price :555
    },
    {
      id: 7,
      name: 'Hawaiian Airlines',
      img: 'https://example.com/hawaiian.png',
      startPoint: 'Honolulu',
      endPoint: 'Tokyo',
      time: '11:55 PM',
      dateTime: 'Thu Aug 17 2023',
      price :555
    },
    {
      id: 8,
      name: 'Spirit Airlines',
      img: 'https://example.com/spirit.png',
      startPoint: 'Fort Lauderdale',
      endPoint: 'New Orleans',
      time: '4:40 PM',
      dateTime: 'Sat Nov 11 2023',
      price :555
    },
    {
      id: 9,
      name: 'Frontier Airlines',
      img: 'https://example.com/frontier.png',
      startPoint: 'Denver',
      endPoint: 'San Diego',
      time: '7:10 AM',
      dateTime: 'Wed Feb 1 2023',
      price :555
    },
    {
      id: 10,
      name: 'Allegiant Air',
      img: 'https://example.com/allegiant.png',
      startPoint: 'Las Vegas',
      endPoint: 'Reno',
      time: '3:25 PM',
      dateTime: 'Fri Sep 29 2023',
       price :555
    }
  ];

  // The data array has 10 elements, each with the required properties

  const route = useRoute();
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    if (
      item.startPoint
        .toLowerCase()
        .includes(route.params.first.toLowerCase()) &&
      item.endPoint.toLowerCase().includes(route.params.second.toLowerCase())
    ) {
      if (item.startPoint === "") {
        return null;
      }
      return (
        <Pressable
          style={styles.items}
          onPress={() => {
            navigation.navigate("DetailFlight", item);
          }}
        >
          <Image
            style={{ width: 100, height: 70, resizeMode: "cover" }}
            source={{ uri: item.img }}
          />


          <View style={styles.detail}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.places}>
              {item.startPoint} to {item.endPoint}
            </Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <MaterialCommunityIcons
            style={styles.icon}
            name="airplane-marker"
            size={25}
            color="white"
          />
        </Pressable>
      );
    }
  };
  const getItemCount = (data) => {
    return data.length;
  };
  const getItem = (data, index) => {
    return data[index];
  };
  const keyExtractor = (item) => item.name;
  return (
    <View>
      <VirtualizedList
        data={data}
        renderItem={renderItem}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default FlightResultScreen;

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 5,
  },
  detail: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  timeText: {
    color: "#4eb09b",
    fontWeight: "500",
  },
  icon: {
    marginLeft: 40,
    backgroundColor: "#6c7ee1",
    padding: 7,
    borderRadius: 25,
  },
});
