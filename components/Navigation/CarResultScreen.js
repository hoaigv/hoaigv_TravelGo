import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";

const CarResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // Define the car data array
  const carData = [
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Toyota",
      price: 25000,
      quantity: 5,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Honda",
      price: 30000,
      quantity: 2,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Ford",
      price: 35000,
      quantity: 3,
      seats: 7,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Chevrolet",
      price: 40000,
      quantity: 7,
      seats: 7,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Nissan",
      price: 28000,
      quantity: 4,
      seats: 5,
    },
    // Add more car objects here...
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "BMW",
      price: 50000,
      quantity: 1,
      seats: 4,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Mercedes-Benz",
      price: 60000,
      quantity: 2,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Audi",
      price: 55000,
      quantity: 3,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Tesla",
      price: 75000,
      quantity: 4,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Lamborghini",
      price: 500000,
      quantity: 1,
      seats: 2,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Ferrari",
      price: 450000,
      quantity: 2,
      seats: 2,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Porsche",
      price: 100000,
      quantity: 5,
      seats: 4,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Maserati",
      price: 120000,
      quantity: 2,
      seats: 4,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Jaguar",
      price: 60000,
      quantity: 3,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Bentley",
      price: 200000,
      quantity: 1,
      seats: 5,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Rolls-Royce",
      price: 300000,
      quantity: 1,
      seats: 4,
    },
    {
      img: "https://www.autotribute.com/wp-content/uploads/2021/10/Types-Of-Sports-Cars-C8-Corvette-Stingray.jpg",
      name: "Bugatti",
      price: 5000000,
      quantity: 1,
      seats: 2,
    },
    {
      img: "https://www.example.com/car18.jpg",
      name: "McLaren",
      price: 350000,
      quantity: 2,
      seats: 2,
    },
    {
      img: "https://www.example.com/car19.jpg",
      name: "Aston Martin",
      price: 150000,
      quantity: 4,
      seats: 4,
    },
    {
      img: "https://www.example.com/car20.jpg",
      name: "Koenigsegg",
      price: 5000000,
      quantity: 1,
      seats: 2,
    },
  ];
  return (
    <View>
      <FlatList
        style={{ margin: 10 }}
        data={carData}
        renderItem={({ item }) => {
          if (item.seats === route.params.seats) {
            if (route.params.seats === 0) {
              return null;
            }
            return (
              <Pressable 
              onPress={()=>navigation.navigate('CarDetail',{
                name : item.name,
                img : item.img,
                place : route.params.places,
                price : item.price,
                quantity : item.quantity,
                startDate : route.params.startDay,
                endDate : route.params.endDay,
                select : route.params.select,
                seats : route.params.seats
              }) }
                style={{
                  marginBottom: 10,
                  flexDirection: "row",
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 90, height: 50 }}
                    source={{ uri: item.img }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>
                      {item.name.length > 5 ? item.name.substr(0 , 5)+"..":item.name}
                    </Text>
                    <Text style={{ color: "gray" }}>
                      Quantity : {item.quantity}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "black",
                    padding:5,
                    marginVertical:5,
                    borderRadius:3
                  }}
                >
                  <Text style={{ color: "white" }}>${item.price}</Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default CarResultScreen;

const styles = StyleSheet.create({});
