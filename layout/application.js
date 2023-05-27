import { Text, View, TouchableOpacity,StyleSheet } from "react-native"
import {def} from './default.js'
const Application = ({children}) => {
    
  return (
    <View>
        
        {children}
        <View style={styles.nav}>
        {def.map((n)=>{
            return(<TouchableOpacity  key={n.name} style={styles.ele}><Text>{n.name}</Text></TouchableOpacity>)
        })}
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
  nav:{
    backgroundColor:"red",
    justifyContent:"space-around",
    flexDirection:"row",
    position:"absolute",
    bottom:0 ,
    flex:1,
    width:"100%",
    
  },
  ele:{
    paddingVertical:20
  }
})


export default Application