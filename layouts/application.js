import { Text, View, TouchableOpacity,StyleSheet } from "react-native"
import {def} from './def.js'
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
const Application = ({children}) => {
   const navigation = useNavigation();

  return (
    <View style={{display:'flex',flex:1,}}>
        <View style={{flex:0.92,backgroundColor:"blue"}}>
        {children}
        </View>
        <View style={styles.nav}>
        {/* <TouchableOpacity   style={styles.ele} onPress={()=>pageHandler('Call')}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity   style={styles.ele} onPress={()=>pageHandler('Map')}><Text>Map</Text></TouchableOpacity>
        <TouchableOpacity   style={styles.ele} onPress={()=>pageHandler('Statistics')}><Text>Statistics</Text></TouchableOpacity>
        <TouchableOpacity   style={styles.ele} onPress={()=>pageHandler('User')}><Text>User</Text></TouchableOpacity> */}
        {def.map((n)=>{
          if(n.name!=='Login')
            return(<TouchableOpacity  key={n.name} style={styles.ele} onPress={()=>{navigation.navigate(`${n.name}`)}}><Text>{n.name}</Text></TouchableOpacity>)
        })}
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
  nav:{
    backgroundColor:"green",
    justifyContent:"space-around",
    flexDirection:"row",
    bottom:0,
    flex:0.08,
    width:"100%",
    
  },
  ele:{
    paddingVertical:20
  }
})


export default Application