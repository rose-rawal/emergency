import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import Application from '../../layout/application'
import { useContext, useState } from 'react'
import context from '../../context/maincontext'
import PushNotification from "react-native-push-notification";
import Form from './form';
const Home = () => {
  

  
  const {socket,page,setPage,data,setData}=useContext(context);
  socket.on("hello",msg=>{setData(msg)})
  
  return (
    <Application>
        {data && <View>
    
          <Form data={data}/>

         

      
     
      </View>    
      }

    </Application>
  )
}
const styles=StyleSheet.create({
  text:{
    color:"white"
  }
})
export default Home