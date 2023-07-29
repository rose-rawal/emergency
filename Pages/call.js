import React from 'react'
import {StyleSheet, Pressable, Text, View,Image, Linking, Platform, ScrollView } from 'react-native'
import Application from "../layout/application"
const styles = StyleSheet.create({
  head:{
    fontSize:20,
    textAlign:"center",
    paddingBottom:30,
    paddingTop:20,
    fontWeight:"bold",
    color:'white'
  },
    container: {
        flex: 1,
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#001133'
      
    },
    pressable: {
        width: '45%', 
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    paddingBottom:10,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
      overflow:'hidden'
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
    },
    image: {
      width: '100%',
      height: '95%',
      // borderRadius:10
    },
    pics:{
      // overflow:'hidden',
    // height:10
    }
  });



const Call = () => {

  const makePhoneCall = (number) => {
    const phoneNumber = number; // Replace with the actual phone number
    if (Platform.OS === 'android') {
    Linking.openURL(phoneNumber);
    }
         
          
  };
  return (
<>
<Application>
<Text style={styles.head}>Available Emergency Call Service</Text>
<ScrollView>

<View style={styles.container}>
      <Pressable style={styles.pressable} android_ripple={{ color: 'red' }} onPress={()=>{makePhoneCall('tel:102')}}>
        <Image
          source={require('../assets/images/ambulance.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Ambulance</Text>
      </Pressable>

      <Pressable style={styles.pressable} android_ripple={{ color: 'red' }} onPress={()=>{makePhoneCall('tel:101')}}>
        
        <Image
          source={require('../assets/images/fire.png')}
          style={styles.image}
        />
        
        <Text style={styles.text}>Fire Brigade</Text>
      </Pressable>

      <Pressable style={styles.pressable} android_ripple={{ color: 'red' }} onPress={()=>{makePhoneCall('tel:100')}}>
       
        <Image
          source={require('../assets/images/police.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Police Services</Text>
      </Pressable>

      <Pressable style={styles.pressable} android_ripple={{ color: 'red' }} onPress={()=>{makePhoneCall('tel:9841007074 ')}}>
        <Image
          source={require('../assets/images/animals.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Animal Rescue</Text>
      </Pressable>
    </View>
    </ScrollView>
    </Application>
</>

    )
}

export default Call