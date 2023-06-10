import { Text, View, TouchableOpacity,StyleSheet,Dimensions } from "react-native"
import {def} from './default.js'
import { useContext } from "react"

import context from "../context/maincontext.js"
const hei=Dimensions.get("window").height




const Application = ({children}) => {
  
    const {page,setPage}=useContext(context)
  return (
    <View>
        <View style={styles.child}>{children}</View>
        <View style={styles.nav}>
        {def.map((n)=>{
            return(<TouchableOpacity  key={n.name} style={styles.ele} onPress={()=>{setPage(n.name)}}><Text style={styles.text}>{n.name}</Text></TouchableOpacity>)
        })}
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
  child:{
   height:hei*0.92,
   paddingTop:20
  },
  nav:{
    backgroundColor:"black",
    justifyContent:"space-around",
    flexDirection:"row",
    
    // height:"100%",
    
    width:"100%",
    
  },
  ele:{
    paddingVertical:20
  },
  text:{
    color:"white",
    fontFamily:"Roboto",
    fontWeight:"bold"
    
  }
})


export default Application