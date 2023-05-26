import {Text,StyleSheet, View, Button, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { useContext, useEffect, useState } from "react";
import Input from '../snips/input'
import context from '../context/maincontext';
const Login = ({navigation}) => {
  const {newUser,setNewUser,signedUser,setSignedUser}=useContext(context)
  console.log(newUser)
     const [logData,setLogData]=useState({
        Name:'',
        Password:''
    })
    const [sign,setSign]=useState(false)
    const handleLogin=()=>{
      // console.log(logData)
    }

    function signedupHandler()
    {
setSignedUser((prevItem)=> [...prevItem,newUser])

    }

    function loginHandler()
    {
      const found =signedUser.find(item=>item.Name===logData.Name);
      if(found)
      {
       console.log("gg")
navigation.navigate("Call");
      }
    }
    
  return (
    <View>
    {sign?<><Text style={styles.heading}>Emergency System</Text>
    <Input name="Name" setLogData={setLogData} logData={logData}/>
    <Input name="Password" setLogData={setLogData} logData={logData}/>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Button title='Submit' onPress={loginHandler}/>
    </TouchableOpacity>
        <Text>Donot have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >SignUp</Text>
        </TouchableOpacity></>:
   <ScrollView>
        <><Text style={styles.heading}>Emergency System</Text>

    <Input name="Name" setLogData={setNewUser} logData={newUser}/>
    <Input name="Password" setLogData={setNewUser} logData={newUser}/>
    <Input name="Address" setLogData={setNewUser} logData={newUser}/>
    <Input name="Number" setLogData={setNewUser} logData={newUser}/>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Button title='SignUp' onPress={signedupHandler}/>
    </TouchableOpacity>
        <Text>Have an Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >Login</Text>
        </TouchableOpacity></>
        </ScrollView>
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
