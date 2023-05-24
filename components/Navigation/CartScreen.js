import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  VirtualizedList,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CartScreen = () => {
  const [bookingHotels, setBookingHotels] = useState([
    {
      id: 1,
      name: "Ritz Carlton",
      place: "New York",
      room: 2,
      newPrice: 500,
      startDate: "2023-06-01",
      endDate: "2023-06-05",
      img: "https://pix8.agoda.net/hotelImages/8000/0/de247c7d868e2b5b263306d9d209f55a.jpg",
    },
    {
      id: 2,
      name: "The Savoy",
      place: "London",
      room: 1,
      newPrice: 600,
      startDate: "2023-07-10",
      endDate: "2023-07-15",
      img: "https://assets.suitcasemag.com/images/hero_mobile_1400/260844-savoybowmorelaunch-april21-085-jpg.jpg",
    },
    {
      id: 3,
      name: "Burj Al Arab",
      place: "Dubai",
      room: 3,
      newPrice: 1000,
      startDate: "2023-08-05",
      endDate: "2023-08-10",
      img: "https://transviet.com.vn/images/Khuyen-Mai/Pictures/cam_nang_du_lich/DUBAI/khach-san-burjalarab0.jpg",
    },
    {
      id: 4,
      name: "Four Seasons Hotel George V",
      place: "Paris",
      room: 2,
      newPrice: 700,
      startDate: "2023-09-01",
      endDate: "2023-09-05",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/H%C3%B4tel_George-V_25_08_2007_n3.jpg/375px-H%C3%B4tel_George-V_25_08_2007_n3.jpg",
    },
    {
      id: 5,
      name: "The Plaza",
      place: "New York",
      room: 1,
      newPrice: 800,
      startDate: "2023-10-01",
      endDate: "2023-10-05",
      img: "https://www.theplazany.com/wp-content/uploads/2022/06/plz-exterior-day-1920x900-1.jpg",
    },
  ]);
  const [bookingFlights, setBookingFlights] = useState([
    {
      id: 1,
      name: "John F. Kennedy International Airport",
      place: "New York",
      img: "https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png",
      price: 300,
      date: "2023-06-01",
    },
    {
      id: 2,
      name: "Heathrow Airport",
      place: "London",
      img: "https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png",
      price: 400,
      date: "2023-07-10",
    },
    {
      id: 3,
      name: "Dubai International Airport",
      place: "Dubai",
      img: "https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png",
      price: 500,
      date: "2023-08-05",
    },
    {
      id: 4,
      name: "Charles de Gaulle Airport",
      place: "Paris",
      img: "https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png",
      price: 450,
      date: "2023-09-01",
    },
    {
      id: 5,
      name: "Tokyo International Airport (HanedaAirport)",
      place: "Tokyo",
      img: "https://www.noupe.com/wp-content/uploads/2020/02/turkishairlineslogo.png",
      price: 600,
      date: "2023-10-01",
    },
  ]);
  const [bookingCar, setBookingCar] = useState([
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      place: "Los Angeles",
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      price: 200,
    },
    {
      id: 2,
      name: "BMW 7 Series",
      place: "New York",
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      price: 150,
    },
    {
      id: 3,
      name: "Audi A8",
      place: "London",
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      price: 180,
    },
    {
      id: 4,
      name: "Lexus LS",
      place: "Tokyo",
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      price: 220,
    },
    {
      id: 5,
      name: "Rolls-Royce Ghost",
      place: "Dubai",
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      price: 300,
    },
  ]);
  const [showListHotels, setShowListHotels] = useState(false);
  const [showListFlights, setShowListFlights] = useState(false);
  const [showListCar, setShowListCar] = useState(false);
  const showHotels = () => {
    setShowListHotels(true);
    setShowListFlights(false);
    setShowListCar(false);
  };
  const showFlights = () => {
    setShowListHotels(false);
    setShowListFlights(true);
    setShowListCar(false);
  };
  const showCar = () => {
    setShowListHotels(false);
    setShowListFlights(false);
    setShowListCar(true);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const renderFlightsItem = ({ item }) => {
    if (item == null) return null;
    return (
      <>
        <Pressable onPress={() => handleSelectItem(item)}>
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 70, height: 50 }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {item.name.length > 8
                    ? item.name.substr(0, 8) + "..."
                    : item.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                  ({item.place})
                </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 13 }}>{item.date}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "black",
                margin: 3,
                padding: 2,
              }}
            >
              <Text style={{ color: "white" }}>${item.price}</Text>
            </View>
          </View>
        </Pressable>

        {selectedItem && selectedItem.id === item.id && showListFlights && (
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "white",
              position: "relative",
            }}
          >
            <View style={{position: "relative"}}>
              <Text style={{fontSize:16,fontWeight: "bold"}}>Detail about booking :</Text>
              <Text>
                {item.name}I am ChatGPT, a large language model trained by
                OpenAI based on the GPT-3.5 architecture
              </Text>
            </View>
            <View style={{ flexDirection: "row" ,position:"absolute",bottom:15,left:10}}>
              <Pressable style={styles.detailButoon}>
                <Text style={{color:"white"}} >Pay</Text>
              </Pressable>
              <Pressable onPress={() => handleCancelOrderFlight(item.id)}
              style={styles.detailButoon}>
                <Text style={{color:"white"}}  >cancel order</Text>
              </Pressable>
              <Pressable onPress={() => setSelectedItem(null)}
              style={styles.detailButoon}>
                <Text style={{color:"white"}} >close</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const handleCancelOrderFlight = (itemId) => {
         const newList = bookingFlights.filter((item)=>item.id != itemId);
         setBookingFlights(newList);
         setSelectedItem(null);
  } 
  const renderHotelsItem = ({ item }) => {
    if (item == null) return null;
    return (
      <>
        <Pressable onPress={() => handleSelectItem(item)}>
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 70, height: 50 }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {item.name.length > 8
                    ? item.name.substr(0, 8) + "..."
                    : item.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                  ({item.place})
                </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 13 }}>
                {item.startDate}_{item.endDate}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "black",
                margin: 3,
                padding: 2,
              }}
            >
              <Text style={{ color: "white" }}>
                ${item.room * item.newPrice}
              </Text>
            </View>
          </View>
        </Pressable>
        {selectedItem && selectedItem.id === item.id && showListHotels && (
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "white",
              position: "relative",
            }}
          >
            <View style={{position: "relative"}}>
              <Text style={{fontSize:16,fontWeight: "bold"}}>Detail about booking :</Text>
              <Text>
                {item.name}I am ChatGPT, a large language model trained by
                OpenAI based on the GPT-3.5 architecture
              </Text>
            </View>
            <View style={{ flexDirection: "row" ,position:"absolute",bottom:15,left:10}}>
              <Pressable style={styles.detailButoon}>
                <Text style={{color:"white"}} >Pay</Text>
              </Pressable>
              <Pressable onPress={() => handleCancelOrderHotel(item.id)}
               style={styles.detailButoon}>
                <Text style={{color:"white"}}  >cancel order</Text>
              </Pressable>
              <Pressable onPress={() => setSelectedItem(null)}
              style={styles.detailButoon}>
                <Text style={{color:"white"}} >close</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const handleCancelOrderHotel = (itemId) => {
    const newList = bookingHotels.filter((item)=>item.id != itemId);
    setBookingHotels(newList);
    setSelectedItem(null);
} 
  const renderCarItem = ({ item }) => {
    if (item == null) return null;
    return (
   <>
       <Pressable onPress={() => handleSelectItem(item)}>
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            alignItems: "center",
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: item.img }}
              style={{ width: 70, height: 50 }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: "row" }}>
              <Text>
                {item.name.length > 5
                  ? item.name.substr(0, 5) + "..."
                  : item.name}
              </Text>
              <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                ({item.place})
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "black",
              margin: 3,
              padding: 2,
            }}
          >
            <Text style={{ color: "white" }}>${item.price}</Text>
          </View>
        </View>
      </Pressable>
      {selectedItem && selectedItem.id === item.id && showListCar && (
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "white",
              position: "relative",
            }}
          >
            <View style={{position: "relative"}}>
              <Text style={{fontSize:16,fontWeight: "bold"}}>Detail about booking :</Text>
              <Text>
                {item.name}I am ChatGPT, a large language model trained by
                OpenAI based on the GPT-3.5 architecture
              </Text>
            </View>
            <View style={{ flexDirection: "row" ,position:"absolute",bottom:15,left:10}}>
              <Pressable style={styles.detailButoon}>
                <Text style={{color:"white"}} >Pay</Text>
              </Pressable>
              <Pressable    onPress={() => handleCancelOrderCar(item.id)}
               style={styles.detailButoon}>
                <Text style={{color:"white"}}  >cancel order</Text>
              </Pressable>
              <Pressable onPress={() => setSelectedItem(null)}
              style={styles.detailButoon}>
                <Text style={{color:"white"}} >close</Text>
              </Pressable>
            </View>
          </View>
        )}
   </>
    );
  };
  const handleCancelOrderCar = (itemId) => {
    const newList = bookingCar.filter((item)=>item.id != itemId);
    setBookingCar(newList);
    setSelectedItem(null);
} 
  const getItemCount = (data) => {
    return data.length;
  };
  const getItem = (data, index) => {
    return data[index];
  };
  const keyExtractor = (item) => item.id;

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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.item}>
          <Pressable onPress={() => showHotels()} style={styles.tag}>
            <FontAwesome5 name="hotel" size={24} color="white" />
            <Text style={styles.textTitle}>Hotels Cart</Text>
            <Entypo
              style={styles.arrowIcon}
              name="select-arrows"
              size={24}
              color="white"
            />
          </Pressable>
          {showListHotels && (
            <VirtualizedList
              style={{ height: 200 }}
              data={bookingHotels}
              renderItem={renderHotelsItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
        <View style={styles.item}>
          <Pressable onPress={() => showFlights()} style={styles.tag}>
            <FontAwesome5 name="plane-departure" size={24} color="white" />
            <Text style={styles.textTitle}>Flights Cart</Text>
            <Entypo
              style={styles.arrowIcon}
              name="select-arrows"
              size={24}
              color="white"
            />
          </Pressable>
          {showListFlights && (
            <VirtualizedList
              style={{ height: 200 }}
              data={bookingFlights}
              renderItem={renderFlightsItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
        <View style={styles.item}>
          <Pressable onPress={() => showCar()} style={styles.tag}>
            <Fontisto name="taxi" size={24} color="white" />
            <Text style={styles.textTitle}>Rental Car Cart</Text>
            <Entypo
              style={styles.arrowIcon}
              name="select-arrows"
              size={24}
              color="white"
            />
          </Pressable>
          {showListCar && (
            <VirtualizedList
              style={{ height: 200 }}
              data={bookingCar}
              renderItem={renderCarItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
  },
  item: {
    marginBottom: 7,
  },
  tag: {
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#0c5776",
    padding: 10,
  },
  currentSate: {
    backgroundColor: "#2dc2ac",
  },
  textTitle: {
    color: "white",
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowIcon: {
    position: "absolute",
    right: 5,
    top: 10,
  },
  detailButoon:{
    backgroundColor:'black',
    marginHorizontal:10,
    padding:10,
  }
});
