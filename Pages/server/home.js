import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import Application from '../../layout/application'
import { useContext, useState } from 'react'
import context from '../../context/maincontext'
import PushNotification from "react-native-push-notification";
const Home = () => {
  

  
  const {socket,page,setPage,data,setData}=useContext(context);
  socket.on("hello",msg=>{setData(msg)})
  const handlePress=()=>{
    console.log(data)
    setPage("Map")
  }
  return (
    <Application>
        {data && <View><Text style={styles.text}>Emergency Service Required... {data.name}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>Go to Map</Text>
        </TouchableOpacity></View>}
    </Application>
  )
}
const styles=StyleSheet.create({
  text:{
    color:"white"
  }
})
export default Home