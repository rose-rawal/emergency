import { View ,Text, TouchableOpacity} from "react-native"
import MapView, { Circle, Marker } from "react-native-maps"
import def from '../layout/default'
import Application from "../layout/application"
import { useState,useEffect, useContext } from "react"
import * as Location from 'expo-location';
import { getOneUser } from "../api/users"
import context from "../context/maincontext"
const Map = (userData) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const {socket} =useContext(context)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  // console.log("data req",userData)
  const [currentUser,setCurrentUser]=useState({})
  // console.log("data",userData)
  const [pin,setPin]=useState({
    latitude: 37.78825,
    longitude: -122.4324
  })
  useEffect(()=>{
    const data=async()=>{
      console.log("user data:",userData.userData)
      const abc=await getOneUser(_id=userData.userData)
      setCurrentUser(abc)
      setTimeout(()=>{

        console.log("fetches",currentUser)
      },1000)
    }
    data()
  },[])
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPin({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude
      })
    })();
  }, []);
  const handlePress=()=>{

  }

  return (
    <Application>
    <View>
    
    <MapView
    style={{width:"100%",height:"100%"}}
  initialRegion={{
    latitude: 27.676831,
    longitude: 85.332443,
    latitudeDelta: 0.0010,
    longitudeDelta: 0.0010,
    
  }}
  showsUserLocation={true}
>
  <Marker
  coordinate={pin} title={currentUser.name} description={`${currentUser.email} requires emergency Sevice`}
    draggable={true}
    onDragStart={(e)=>{
      console.log("drag:" ,e)
    }}
    onDragEnd={(e)=>{
      console.log("drag:" ,e)
      setPin({longitude:e.nativeEvent.coordinate.longitude,
      latitude:e.nativeEvent.coordinate.latitude})
    }}
    ></Marker>
    <Circle
      center={pin}
      radius={20}
    ></Circle>
</MapView>

</View>
<TouchableOpacity onPress={()=>{handlePress()}} style={{position:'absolute',right:10,bottom:20,backgroundColor:'black',paddingHorizontal:30,paddingVertical:10,borderRadius:20}}><Text style={{color:"white",fontSize:20}}>SOS</Text></TouchableOpacity>
</Application>
  )
}

export default Map