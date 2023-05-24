import {Text,StyleSheet, View, Button, TouchableOpacity, ScrollView} from 'react-native'
import { useContext, useEffect, useState } from "react";
import Input from '../snips/input'
import context from '../context/maincontext';
import Call from './call';
const Login = () => {
  const {newUser,setNewUser,allUser,setAllUser}=useContext(context)
  // console.log(newUser)
     const [logData,setLogData]=useState({
        Name:'',
        Password:''
    })
    const [error,setError]=useState({
      message:''
    })
    const [sign,setSign]=useState(false)
    const handleLogin=()=>{
      allUser.map(n=>{
        if(n.Name===logData.Name && n.Password===logData.Password){
          setError({...error,message:"Logged In"})
          console.log("Hell")
        }
        else {console.log(allUser)
        console.log(logData)}
      })
    }
    const handleSignUp=()=>{
      if(!newUser.Name)
      setError({...error,message:"please enter name"})
      else if(!newUser.Password)
      setError({...error,message:"please enter Password"})
      else if(!newUser.Number)
      setError({...error,message:"please enter Number"})
      else if(!newUser.Address)
      setError({...error,message:"please enter Address"})
      setTimeout(()=>{
        setError({...error,message:''})
      },1000)
      // setAllUser()
      setAllUser([...allUser,newUser])
      console.log(allUser);
    }
    
  return (
    <View>
    {error.message==="Logged In"?<Call/>:<>
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
        <ScrollView>
        <><Text style={styles.heading}>Emergency System</Text>
        {!error.message?<></>:<Text>{error.message}</Text>}
    <Input name="Name" setLogData={setNewUser} logData={newUser}/>
    <Input name="Password" setLogData={setNewUser} logData={newUser}/>
    <Input name="Address" setLogData={setNewUser} logData={newUser}/>
    <Input name="Number" setLogData={setNewUser} logData={newUser}/>
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>SignUp</Text>
    </TouchableOpacity>
        <Text>Have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >Login</Text>
        </TouchableOpacity></>
        </ScrollView>
    }</>}
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
