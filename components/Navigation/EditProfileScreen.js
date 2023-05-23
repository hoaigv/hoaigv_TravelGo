import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert, Button} from 'react-native'
import React , { useLayoutEffect, useState }  from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const EditProfileScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const register = () => {
        if(email === "" || password === "" || phone === "" ){
            Alert.alert(
                "Invalid Detials",
                "Please enter all the credentials",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
       
    }
   
  return (
    <SafeAreaView  style={{
      
       
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}>
    <KeyboardAvoidingView style={{position: "relative",top:-60}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
       <View style={{flexDirection:"row"}}>
       <AntDesign name="edit" size={24} color="#de741c" />
          <Text style={{ color: "#de741c", fontSize: 18, fontWeight: "700",marginLeft:5     }}>
           Edit 
          </Text>
       </View>

          <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "400" }}>
        for  {route.params.data.name}
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
           <View style={{ flexDirection:"row",alignItems: "center" }}>
           <MaterialIcons name="email" size={24} color="#de741c" />
           <Text style={{ fontSize: 18, fontWeight: "600", color: "gray",marginLeft:5}}>
               Your Email :
            </Text>
           </View>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder={route.params.data.email}
              placeholderTextColor={"gray"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection:"row",alignItems: "center" }}>
            <MaterialCommunityIcons name="form-textbox-password" size={24} color="#de741c" />
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray",marginLeft:5}}>
                  Your PassWord :
              </Text>
            </View>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder={route.params.data.pass}
              placeholderTextColor={"gray"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection:"row",alignItems: "center" }}>
          <Entypo name="phone" size={24} color="#de741c" />
           <Text style={{ fontSize: 18, fontWeight: "600", color: "gray",marginLeft:5}}>
                Phone Number :
            </Text>
           </View>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder={route.params.data.phone}
              placeholderTextColor={"gray"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable
          style={{
            width: 200,
            backgroundColor: "#de741c",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Submit</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({})