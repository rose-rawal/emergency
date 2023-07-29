import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import Application from '../../layout/application'
import { useContext, useState } from 'react'
import context from '../../context/maincontext'
import PushNotification from "react-native-push-notification";
// import { storeStats } from '../../api/statistics';
import Form from './form';
const Home = () => {
  
  
  const {socket,page,setPage,data,setData,setShowForm,showForm}=useContext(context);

  

  socket.on("hello",msg=>{
   console.log("the city name is",msg);
   setShowForm(true);
    setData(msg)
    // storeStats({msg});
 
  })
  console.log("Home data",data);
  return (
    <Application>
        {data && <View>
    
          {showForm && <Form data={data}/>}

         

      
     
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