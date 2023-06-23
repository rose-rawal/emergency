import {View,Text} from 'react-native'
import Application from '../../layout/application'
import { useContext } from 'react'
import context from '../../context/maincontext'
import PushNotification from "react-native-push-notification";
const Home = () => {
  


  const {socket}=useContext(context);
  socket.on("hello",msg=>{console.log("from server",msg)})
  return (
    <Application>
        <Text>Home</Text>
    </Application>
  )
}

export default Home