import {Text,StyleSheet, View, Button, TouchableOpacity} from 'react-native'
import { useContext, useEffect, useState } from "react";
import Input from '../snips/input'
import context from '../context/maincontext';
const Login = () => {
  const {newUser,setNewUser}=useContext(context)
  console.log(newUser)
     const [logData,setLogData]=useState({
        Name:'',
        Password:''
    })
    const [sign,setSign]=useState(false)
    const handleLogin=()=>{
      // console.log(logData)
    }
    
  return (
    <View>
    {sign?<><Text style={styles.heading}>Emergency System</Text>
    <Input name="Name" setLogData={setLogData} logData={logData}/>
    <Input name="Password" setLogData={setLogData} logData={logData}/>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Submit</Text>
    </TouchableOpacity>
        <Text>Donot have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >SignUp</Text>
        </TouchableOpacity></>:

        <><Text style={styles.heading}>Emergency System</Text>
    <Input name="Name" setLogData={setNewUser} logData={logData}/>
    <Input name="Password" setLogData={setNewUser} logData={logData}/>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Submit</Text>
    </TouchableOpacity>
        <Text>Donot have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >SignUp</Text>
        </TouchableOpacity></>
    }
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
