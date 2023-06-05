import { Text, View, TouchableOpacity,StyleSheet } from "react-native"
import {def} from './default.js'
import { useContext } from "react"
import context from "../context/maincontext.js"
const Application = ({children}) => {
    const {page,setPage}=useContext(context)
  return (
    <View>
        {children}
        <View style={styles.nav}>
        {def.map((n)=>{
            return(<TouchableOpacity  key={n.name} style={styles.ele} onPress={()=>{setPage(n.name)}}><Text>{n.name}</Text></TouchableOpacity>)
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