import { Text, View, TouchableOpacity,StyleSheet,Dimensions } from "react-native"
import {def,ser} from './default.js'
import { useContext } from "react"


import context from "../context/maincontext.js"
export const hei=Dimensions.get("window").height;
export const wid=Dimensions.get("window").width;




const Application = ({children}) => {
  
    const {page,setPage,isServer}=useContext(context)
  return (
    <View style={styles.main}>
    
        <View style={styles.child}>{children}</View>
        {!isServer?<View style={styles.nav}>
        {def.map((n)=>{
            return(<TouchableOpacity  key={n.name} style={styles.ele} onPress={()=>{setPage(n.name)}}><Text style={styles.text}>{n.name}</Text></TouchableOpacity>)
        })}
    </View>:<View style={styles.nav}>
        {ser.map((n)=>{
            return(<TouchableOpacity  key={n.name} style={styles.ele} onPress={()=>{setPage(n.name)}}><Text style={styles.text}>{n.name}</Text></TouchableOpacity>)
        })}
    </View>}
    
    </View>
  )
}
const styles=StyleSheet.create({

  main:{
marginTop:40,

  },

  child:{
   
   paddingTop:20,
   backgroundColor:'#001133',
height:hei*0.95
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