import {Text,StyleSheet, View, Button, TouchableOpacity, ScrollView} from 'react-native'
import { useContext, useEffect, useState } from "react";
import Input from '../snips/input'
import context from '../context/maincontext';
import Call from './call';
import Map from './map';
import { getUser,addUser,login } from '../api/users';
import axios from 'axios';
import Statistics from './statistics';
import Users from './user';
import Error from './error';
import { addServer, loginServer } from '../api/servers';

const Login = () => {
  const [data,setData]=useState('')
  const [userData,setUserData]=useState('')
  const [fals,setFals]=useState(false);
  useEffect(()=>{
    // setData("hello")
    const abc=async()=>{
      const data=await getUser()
      setData(data);
    }
    abc();
  },[])
  // useEffect(()=>{
  //   const ab=async()=>{
  //     await axios.get("http://localhost:5000/all").then(a=>console.log(a.data)).catch(err=>console.log(err))
  //   }
  //   ab()
  // },[])
  
  
  const {newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError,isServer,setIsServer,serverUser,setServerUser}=useContext(context)
  // console.log(newUser)
     const [logData,setLogData]=useState({
        Email:'',
        Password:''
    })
    
    const [sign,setSign]=useState(true)
    const handleLogin=async()=>{
      // allUser.map(n=>{
      //   if(n.Name===logData.Name && n.Password===logData.Password){
        //     console.log("Hell")
        //   }
        //   else {console.log(allUser)
        //   console.log(logData)}
        // })
        let success='';
        if(!isServer){
        success=await login(logData)
        }
        else{
          success=await loginServer(logData)
        }
        
        if(success.success){
          // console.log(success)
        setUserData(success.found._id)
        // console.log("userdata", userData)
          setError({...error,message:"Logged In"})
          setPage("Home")
          setLogData({
            Email:'',
        Password:''
          })

      }
      else{
        setFals(success.message);
        setTimeout(()=>{
          setFals(false);
        },3000)
      }
    }
    const handleSignUp= ()=>{
      if(!isServer){
      if(!newUser.Name)
      setError({...error,message:"please enter name"})
       if(!newUser.Password)
      setError({...error,message:"please enter Password"})
      else if(!newUser.Number)
      setError({...error,message:"please enter Number"})
      else if(!newUser.Address)
      setError({...error,message:"please enter Address"})
      setTimeout(()=>{
        setError({...error,message:''})
      },1000)
      // setAllUser([...allUser,newUser])
      addUser({newUser})
    }else{
      if(!serverUser.Name)
      setError({...error,message:"please enter name"})
       if(!serverUser.Password)
      setError({...error,message:"please enter Password"})
      else if(!serverUser.Number)
      setError({...error,message:"please enter Number"})
      setTimeout(()=>{
        setError({...error,message:''})
      },1000)
      // setAllUser([...allUser,newUser])
      addServer({serverUser})
    }
//       const {data} = await axios.post('/register',{
// name: allUser.Name,
// password : allUser.Password,
// address : allUser.Address,
// phone : allUser.Number,
//      })
      // console.log(allUser);
    }
    const setServer=()=>{
      setIsServer(!isServer)
    }
    
  return (
    //server Page
    <View>
    <ScrollView>
    {isServer?
    <>
    {error.message==="Logged In"?
    page==="Home"?<Call/>:
    page==="Map"?<Map userData={userData}/>:
    page==="Stats"?<Statistics/>:
    page==="User"?<Users/>:<Error/>
    :<>
    {
   sign?<><Text style={styles.heading}>Emergency Server</Text>
   {fals&&<Text style={{color:"red"}}>{fals}</Text>}
    <Input name="Email" setLogData={setLogData} logData={logData}/>
    <Input name="Password" setLogData={setLogData} logData={logData}/>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Submit</Text>
    </TouchableOpacity>
        <Text>Donot have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >SignUp</Text>
        </TouchableOpacity></>:
        <ScrollView>
        <><Text style={styles.heading}>Emergency Server</Text>
        {!error.message?<></>:<Text>{error.message}</Text>}
    <Input name="Name" setLogData={setServerUser} logData={serverUser}/>
    <Input name="Password" setLogData={setServerUser} logData={serverUser}/>
    <Input name="Number" setLogData={setServerUser} logData={serverUser}/>
    <Input name="Email" setLogData={setServerUser} logData={serverUser}/>
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>SignUp</Text>
    </TouchableOpacity>
        <Text>Have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >Login</Text>
        </TouchableOpacity></>
        </ScrollView>
    }
      <Text>Is Client?</Text>
        <TouchableOpacity onPress={()=>setServer()}>
        <Text >Click Here</Text>
        </TouchableOpacity>
    </>
    }</>
    //client page
    :<>
     {error.message==="Logged In"?
    page==="Home"?<Call/>:
    page==="Map"?<Map userData={userData}/>:
    page==="Stats"?<Statistics/>:
    page==="User"?<Users/>:<Error/>
    :<>{
   sign?<><Text style={styles.heading}>Emergency System</Text>
   {fals&&<Text style={{color:"red"}}>{fals}</Text>}
    <Input name="Email" setLogData={setLogData} logData={logData}/>
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
    <Input name="Email" setLogData={setNewUser} logData={newUser}/>
    <Input name="Age" setLogData={setNewUser} logData={newUser}/>
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>SignUp</Text>
    </TouchableOpacity>
        <Text>Have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text >Login</Text>
        </TouchableOpacity></>
        </ScrollView>
    }</>}<Text>Is Server?</Text>
        <TouchableOpacity onPress={()=>setServer()}>
        <Text >Click Here</Text>
        </TouchableOpacity></>}
        </ScrollView>
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
