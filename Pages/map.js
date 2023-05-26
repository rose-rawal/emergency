import { View ,Text} from "react-native"
import MapView from "react-native-maps"
import def from '../layout/default'
import Application from "../layout/application"
const Map = () => {
  return (
    <Application>
    <View>
    
    <MapView
    style={{width:"100%",height:"80%"}}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
</View>
</Application>
  )
}

export default Map