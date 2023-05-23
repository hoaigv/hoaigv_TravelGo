import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DetailFlightScreen = () => {
    const route = useRoute();
    const [adult,setAdult] = useState(1);
    const [children,setChildren] = useState(1);


    
  return (
   <SafeAreaView>
      <View>
      <Image  style={{width:"99%",height:200}} source={{uri : route.params.img}}/>
      </View>
      <View style={styles.detail}>
      <View style={{flex:1,alignItems: 'center',backgroundColor:'black',justifyContent: 'center',margin:5,borderRadius:3}}>
        <Text style={{color:'white',fontWeight:'600'}}>Day Time :</Text>
      </View>
     <View style={{flex:1}}>
     <Text>{route.params.dateTime}</Text>
      <Text>{route.params.time}</Text>
     </View>

      </View>
      <View style={styles.byTicket}>
      <View >
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{flex:1,textAlign: 'center',fontSize:20,fontWeight:"600"}}>
            Adult ticket : 
          </Text>
          <Text style={{flex:1,textAlign: 'center',fontSize:18}}>
            {adult}
          </Text>
         <View style={{flex:1,flexDirection:'row'}}>
         <Pressable onPress={()=>setAdult(adult+1)} >
         <AntDesign name="pluscircle" size={22} color="black" style={{marginRight:45}} />
          </Pressable>
          <Pressable onPress={()=>setAdult(Math.max(0,adult-1))} >
          <AntDesign name="minuscircle" size={22} color="black" />
          </Pressable>
         </View>
        </View>
      </View>
      <View >
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{flex:1 ,textAlign: 'center',fontSize:20,fontWeight:"600"}}>
            Children ticket : 
          </Text>
          <Text style={{flex:1,textAlign: 'center',fontSize:18}}>
            {children}
          </Text>
         <View style={{flex:1,flexDirection:'row'}}>
         <Pressable onPress={()=>setChildren(children+1)} >
         <AntDesign name="pluscircle" size={22} color="black" style={{marginRight:45}} />
          </Pressable>
          <Pressable onPress={()=>setChildren(Math.max(0,children-1))} >
          <AntDesign name="minuscircle" size={22} color="black" />
          </Pressable>
         </View>
        </View>
        
      </View>
      </View>
      <View style={{alignItems: 'center',marginTop:15}}>
        <Text style={{fontSize:35,fontWeight:"400",textDecorationLine:"underline"}}> Total Price :</Text>
      </View>
      <View style={styles.totalPrice}>
         <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:30,fontWeight: 'bold'}}>${route.params.price * (adult+children)}</Text>
         </View>
         <Pressable style={{flex:1,backgroundColor:'black',margin:5}}>
          <Text style={{fontSize:30,fontWeight: 'bold',color:'white',textAlign:'center'}}>Booking Now</Text>
         </Pressable>
      </View>
   </SafeAreaView>
  )
}

export default DetailFlightScreen

const styles = StyleSheet.create({
  detail:{
    flexDirection: 'row',
    margin:5
  },
  totalPrice:{
    flexDirection: 'row',
    marginTop:20,
    alignItems:'center',
    justifyContent: 'center'
  },
 
  
})