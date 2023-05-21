import {Text,StyleSheet, View, Button, TouchableOpacity} from 'react-native'
import { useState } from "react";
import Input from '../snips/input'
const Login = () => {
     const [logData,setLogData]=useState({
        Name:'',
        Password:''
    })
  return (
    <View>
    <Text style={styles.heading}>Emergency System</Text>
    <Input name="Name" setLogData={setLogData} logData={logData}/>
    <Input name="Password" setLogData={setLogData} logData={logData}/>
    <TouchableOpacity style={styles.button}>
        <Text>Submit</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    heading:{
    paddingTop:90,
    fontFamily:'monospace',
    fontSize:30,
    fontWeight:"bold",
    color:'red',
    marginBottom:90
  },button:{
    width:60,
     backgroundColor: "#009688",
     paddingVertical:10,
     paddingHorizontal:12,
     width:"auto",
     alignSelf:"center",
     elevation:10,
     borderRadius:3,
     marginTop:40
  }
})

export default Login
