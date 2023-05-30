import React from 'react'
import {StyleSheet, Pressable, Text, View,Image, Linking, Platform, ScrollView } from 'react-native'
import Application from "../layouts/application"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      
    },
    pressable: {
        width: '45%', 
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
      
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
    },
    image: {
      width: '80%',
      height: '95%',
    },
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
<ScrollView>
{/* <View style={styles.container}> */}
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

      <Pressable style={styles.pressable} android_ripple={{ color: 'red' }} onPress={()=>{makePhoneCall('tel:6969 ')}}>
        <Image
          source={require('../assets/images/animals.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Animal Rescue</Text>
      </Pressable>
    {/* </View> */}
    </ScrollView>
    </Application>
</>

    )
}

export default Call
