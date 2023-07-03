import {View,Text} from 'react-native'
import MapView, { Circle, Marker } from "react-native-maps"
import Application from '../../layout/application'
import { useContext } from 'react'
import context from '../../context/maincontext'

const ServMap = () => {
  const {data,setData}=useContext(context)
  console.log("data",data)
  return (
    <Application>
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
  coordinate={{
    latitude: data?data.latitude:20.676831,
    longitude: data?data.longitude:82.332443,
    latitudeDelta: 0.0010,
    longitudeDelta: 0.0010}} title={`${data.name}`} description={`requires Emergency Sevice`}
    // draggable={true}
    // onDragStart={(e)=>{
    //   console.log("drag:" ,e)
    // }}
    // onDragEnd={(e)=>{
    //   console.log("drag:" ,e)
    //   setPin({longitude:e.nativeEvent.coordinate.longitude,
    //   latitude:e.nativeEvent.coordinate.latitude})
    // }}
    ></Marker>
    {/* <Circle
      center={{latitude: 27.676831,
    longitude: 85.332443,
    latitudeDelta: 0.0010,
    longitudeDelta: 0.0010,}}
      radius={20}
    ></Circle>  */}
</MapView>
    </Application>
  )
}

export default ServMap