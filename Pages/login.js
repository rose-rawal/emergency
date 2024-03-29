import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import Input from "../snips/input";
import context from "../context/maincontext";
import Call from "./call";
import Map from "./map";

import { getUser, addUser, login } from "../api/users";
import axios from "axios";
import Statistics from "./statistics";
import Users from "./user";

import { addServer, loginServer } from "../api/servers";
import { hei, wid } from "../layout/application";
import Home from "./server/home";
import ServMap from "./server/servMap";
import Stats from "./server/stats";
import ServerUser from "./server/serveruser";

const Login = () => {
  const [data, setData] = useState("");
  const [userData, setUserData] = useState("");
  const [fals, setFals] = useState(false);
  useEffect(() => {
    // setData("hello")
    const abc = async () => {
      const data = await getUser();
      setData(data);
    };
    abc();
  }, []);
  // useEffect(()=>{
  //   const ab=async()=>{
  //     await axios.get("http://localhost:5000/all").then(a=>console.log(a.data)).catch(err=>console.log(err))
  //   }
  //   ab()
  // },[])

  const {
    newUser,
    setNewUser,
    allUser,
    setAllUser,
    page,
    setPage,
    error,
    setError,
    isServer,
    setIsServer,
    serverUser,
    setServerUser,
  } = useContext(context);
  // console.log(newUser)
  const [logData, setLogData] = useState({
    Email: "",
    Password: "",
  });

  const [sign, setSign] = useState(true);
  const handleLogin = async () => {


    // allUser.map(n=>{
    //   if(n.Name===logData.Name && n.Password===logData.Password){
    //     console.log("Hell")
    //   }
    //   else {console.log(allUser)
    //   console.log(logData)}
    // })
    let success = "";
    if (!isServer) {
      success = await login(logData);
    } else {
      console.log("here at server")
      success = await loginServer(logData);
    }

    if (success.success && isServer) {
      console.log(success)
      setUserData(success.found._id);
      // console.log("userdata is", userData, "this")
      setError({ ...error, message: "Logged In" });
      setPage("Home");
      setLogData({
        Email: "",
        Password: "",
      });
    } else if (success.success && !isServer) {
      console.log(success)
      setUserData(success.found._id);
      // console.log("userdata", userData)
      setError({ ...error, message: "Logged In" });
      setPage("Home");
      setLogData({
        Email: "",
        Password: "",
      });
    } else {
      setFals(success.message);
      setTimeout(() => {
        setFals(false);
      }, 3000);
    }
  

  };
  const handleSignUp = () => {
    if (!isServer) {
      if (!newUser.Name) setError({ ...error, message: "please enter name" });
      if (!newUser.Password)
        setError({ ...error, message: "please enter Password" });
      else if (!newUser.Number)
        setError({ ...error, message: "please enter Number" });
      else if (!newUser.Address)
        setError({ ...error, message: "please enter Address" });
      setTimeout(() => {
        setError({ ...error, message: "" });
      }, 1000);
      // setAllUser([...allUser,newUser])
      addUser({ newUser });
    } else {
      if (!serverUser.Name)
        setError({ ...error, message: "please enter name" });
      if (!serverUser.Password)
        setError({ ...error, message: "please enter Password" });
      else if (!serverUser.Number)
        setError({ ...error, message: "please enter Number" });
      setTimeout(() => {
        setError({ ...error, message: "" });
      }, 1000);
      // setAllUser([...allUser,newUser])
      addServer({ serverUser });
    }
    //       const {data} = await axios.post('/register',{
    // name: allUser.Name,
    // password : allUser.Password,
    // address : allUser.Address,
    // phone : allUser.Number,
    //      })
    // console.log(allUser);
  };
  const setServer = () => {
    setIsServer(!isServer);
  };

  return (
    //server Page
    <View>
      
        {isServer ? (
          <>
            {error.message === "Logged In" ? (
              page === "Home" ? (
                <Home/>
              ) : page==="Map"?<ServMap/>:
              page === "Stats" ? (
                <Stats />
              ) : page === "User" ? (
                <ServerUser userData={userData}/>
              ) : (
                <></>
              )
            ) : (
              <View style={styles.mainContainer}>
                <ImageBackground
                  source={require("../assets/images/HelpEmerge.png")}
                  resizeMode="stretch"
                  imageStyle={styles.backgroundImage}
                >
                  {sign ? (
                    <>
                      <View style={styles.container}>
                        <View style={styles.heads}>
                          <Image
                            source={require("../assets/images/logo.png")}
                            style={styles.logo}
                          />
                          <Text style={styles.headerText}>
                            Emergency Server
                          </Text>
                        </View>

                        <View style={styles.inputContainer}>
                          {fals && <Text style={{ color: "red" }}>{fals}</Text>}
                          <Input
                            name="Email"
                            setLogData={setLogData}
                            logData={logData}
                          />
                          <Input
                            name="Password"
                            setLogData={setLogData}
                            logData={logData}
                          />
                        </View>

                        <View style={styles.buttonContainer}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                          >
                            <Text style={styles.buttonText}>Submit</Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.text}>Donot have Account?</Text>
                        <TouchableOpacity onPress={() => setSign(!sign)}>
                          <Text style={styles.link}>SignUp</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (
                    <ScrollView
                      style={styles.signUpContainer}
                      contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.heads}>
                        <Image
                          source={require("../assets/images/logo.png")}
                          style={styles.logo}
                        />
                        <Text style={styles.headerText}>Emergency Server</Text>
                      </View>

                      <View style={styles.inputContainer}>
                        {!error.message ? <></> : <Text>{error.message}</Text>}
                        <Input
                          name="Name"
                          setLogData={setServerUser}
                          logData={serverUser}
                        />
                        <Input
                          name="Password"
                          setLogData={setServerUser}
                          logData={serverUser}
                        />
                        <Input
                          name="Number"
                          setLogData={setServerUser}
                          logData={serverUser}
                        />
                        <Input
                          name="Email"
                          setLogData={setServerUser}
                          logData={serverUser}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={handleSignUp}
                        >
                          <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.footer}>
                        <View style={styles.footerChild}>
                          <Text style={styles.text}>Have Account?</Text>
                          <TouchableOpacity onPress={() => setSign(!sign)}>
                            <Text style={styles.link}>Login</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.footerChild}>
                          <Text style={styles.text}>Is Client?</Text>
                          <TouchableOpacity onPress={() => setServer()}>
                            <Text style={styles.link}>Click Here</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      {/* <Text>Have Account?</Text>
        <TouchableOpacity onPress={()=>setSign(!sign)}>
        <Text style={styles.link} >Login</Text>
        </TouchableOpacity> */}
                    </ScrollView>
                  )}
                </ImageBackground>
              </View>
            )}
          </>
        ) : (
          //client page
          <>
            {error.message === "Logged In" ? (
              page === "Home" ? (
                <Call />
              ) : page === "Map" ? (
                <Map userData={userData} />
              ) : page === "Stats" ? (
                <Statistics />
              ) : page === "User" ? (
                <Users userData={userData} />
              ) : (
                <></>
              )
            ) : (
              <View style={styles.mainContainer}>
              
                <ImageBackground
                  source={require("../assets/images/HelpEmerge.png")}
                  resizeMode="cover"
                  imageStyle={styles.backgroundImage}
                >
                  {sign ? (
                    <View style={styles.container}>
                      <View style={styles.heads}>
                        <Image
                          source={require("../assets/images/logo.png")}
                          style={styles.logo}
                        />
                        <Text style={styles.headerText}>Emergency System</Text>
                      </View>

                      <View style={styles.inputContainer}>
                        {fals && <Text style={{ color: "red" }}>{fals}</Text>}
                        <Input
                          name="Email"
                          setLogData={setLogData}
                          logData={logData}
                        />
                        <Input
                          name="Password"
                          setLogData={setLogData}
                          logData={logData}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={handleLogin}
                        >
                          <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.text}>Donot have Account?</Text>
                      <TouchableOpacity onPress={() => setSign(!sign)}>
                        <Text style={styles.link}>SignUp</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <ScrollView
                      style={styles.signUpContainer}
                      contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.heads}>
                        <Image
                          source={require("../assets/images/logo.png")}
                          style={styles.logo}
                        />
                        <Text style={styles.headerText}>Emergency System</Text>
                      </View>
                      <View style={styles.inputContainer}>
                        {!error.message ? <></> : <Text>{error.message}</Text>}
                        <Input
                          name="Name"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                        <Input
                          name="Password"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                        <Input
                          name="Address"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                        <Input
                          name="Number"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                        <Input
                          name="Email"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                        <Input
                          name="Age"
                          setLogData={setNewUser}
                          logData={newUser}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={handleSignUp}
                        >
                          <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.footer}>
                        <View style={styles.footerChild}>
                          <Text style={styles.text}>Have Account?</Text>
                          <TouchableOpacity onPress={() => setSign(!sign)}>
                            <Text style={styles.link}>Login</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.footerChild}>
                          <Text style={styles.text}>Is Server?</Text>
                          <TouchableOpacity onPress={() => setServer()}>
                            <Text style={styles.link}>Click Here</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                  )}
                </ImageBackground>
                
              </View>
            )}
          </>
        )}
      
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    // marginTop: 40,
    backgroundColor: "#004f99",
    height: hei,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: hei * 0.8,
    width: wid * 0.75,
    marginHorizontal: 50,

    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001133",
    gap: 15,

    borderRadius: 29,
  },

  backgroundImage: {
    opacity: 0.75,
    height: "115%",
    width: "105%",
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "column",
    height: hei * 0.8,
    width: wid * 0.75,
    marginHorizontal: 50,

    marginTop: 80,

    backgroundColor: "#001133",
    gap: 60,

    borderRadius: 29,
  },
  link: {
    color: "#99bbff",
    fontWeight: "bold",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
  },
  footerChild: {
    margin: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  text: {
    color: "white",
  },

  heads: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "#ff0000",
    fontSize: 20,
    fontFamily: "",
    marginTop: "10%",
    fontWeight: "800",
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 90,
    marginRight: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
    color: "red",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    backgroundColor: "#2196f3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;

// import {Text,StyleSheet, View, Button, TouchableOpacity, ScrollView} from 'react-native'
// import { useContext, useEffect, useState } from "react";
// import Input from '../snips/input'
// import context from '../context/maincontext';
// import Call from './call';
// import Map from './map';
// import { getUser,addUser,login } from '../api/users';
// import axios from 'axios';
// import Statistics from './statistics';
// import Users from './user';
// import Error from './Error';
// import { addServer, loginServer } from '../api/servers';

// const Login = () => {
//   const [data,setData]=useState('')
//   const [userData,setUserData]=useState('')
//   const [fals,setFals]=useState(false);
//   useEffect(()=>{
//     // setData("hello")
//     const abc=async()=>{
//       const data=await getUser()
//       setData(data);
//     }
//     abc();
//   },[])
//   // useEffect(()=>{
//   //   const ab=async()=>{
//   //     await axios.get("http://localhost:5000/all").then(a=>console.log(a.data)).catch(err=>console.log(err))
//   //   }
//   //   ab()
//   // },[])

//   const {newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError,isServer,setIsServer,serverUser,setServerUser}=useContext(context)
//   // console.log(newUser)
//      const [logData,setLogData]=useState({
//         Email:'',
//         Password:''
//     })

//     const [sign,setSign]=useState(true)
//     const handleLogin=async()=>{
//       // allUser.map(n=>{
//       //   if(n.Name===logData.Name && n.Password===logData.Password){
//         //     console.log("Hell")
//         //   }
//         //   else {console.log(allUser)
//         //   console.log(logData)}
//         // })
//         let success='';
//         if(!isServer){
//         success=await login(logData)
//         }
//         else{
//           success=await loginServer(logData)
//         }

//         if(success.success && isServer){
//           // console.log(success)
//         setUserData(success.found._id)
//         // console.log("userdata", userData)
//           setError({...error,message:"Logged In"})
//           setPage("User")
//           setLogData({
//             Email:'',
//         Password:''
//           })

//       }
//       else if(success.success && !isServer){
//           // console.log(success)
//         setUserData(success.found._id)
//         // console.log("userdata", userData)
//           setError({...error,message:"Logged In"})
//           setPage("Home")
//           setLogData({
//             Email:'',
//         Password:''
//           })

//       }
//       else{
//         setFals(success.message);
//         setTimeout(()=>{
//           setFals(false);
//         },3000)
//       }
//     }
//     const handleSignUp= ()=>{
//       if(!isServer){
//       if(!newUser.Name)
//       setError({...error,message:"please enter name"})
//        if(!newUser.Password)
//       setError({...error,message:"please enter Password"})
//       else if(!newUser.Number)
//       setError({...error,message:"please enter Number"})
//       else if(!newUser.Address)
//       setError({...error,message:"please enter Address"})
//       setTimeout(()=>{
//         setError({...error,message:''})
//       },1000)
//       // setAllUser([...allUser,newUser])
//       addUser({newUser})
//     }else{
//       if(!serverUser.Name)
//       setError({...error,message:"please enter name"})
//        if(!serverUser.Password)
//       setError({...error,message:"please enter Password"})
//       else if(!serverUser.Number)
//       setError({...error,message:"please enter Number"})
//       setTimeout(()=>{
//         setError({...error,message:''})
//       },1000)
//       // setAllUser([...allUser,newUser])
//       addServer({serverUser})
//     }
// //       const {data} = await axios.post('/register',{
// // name: allUser.Name,
// // password : allUser.Password,
// // address : allUser.Address,
// // phone : allUser.Number,
// //      })
//       // console.log(allUser);
//     }
//     const setServer=()=>{
//       setIsServer(!isServer)
//     }

//   return (
//     //server Page
//     <View>
//     <ScrollView>
//     {isServer?
//     <>
//     {error.message==="Logged In"?
//     page==="Home"?<Call/>:
//     //page==="Map"?<Map userData={userData}/>:
//     page==="Stats"?<Statistics/>:
//     page==="User"?<Users/>:<Error/>
//     :<>
//     {
//    sign?<><Text style={styles.heading}>Emergency Server</Text>
//    {fals&&<Text style={{color:"red"}}>{fals}</Text>}
//     <Input name="Email" setLogData={setLogData} logData={logData}/>
//     <Input name="Password" setLogData={setLogData} logData={logData}/>
//     <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text>Submit</Text>
//     </TouchableOpacity>
//         <Text>Donot have Account?</Text>
//         <TouchableOpacity onPress={()=>setSign(!sign)}>
//         <Text >SignUp</Text>
//         </TouchableOpacity></>:
//         <ScrollView>
//         <><Text style={styles.heading}>Emergency Server</Text>
//         {!error.message?<></>:<Text>{error.message}</Text>}
//     <Input name="Name" setLogData={setServerUser} logData={serverUser}/>
//     <Input name="Password" setLogData={setServerUser} logData={serverUser}/>
//     <Input name="Number" setLogData={setServerUser} logData={serverUser}/>
//     <Input name="Email" setLogData={setServerUser} logData={serverUser}/>
//     <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text>SignUp</Text>
//     </TouchableOpacity>
//         <Text>Have Account?</Text>
//         <TouchableOpacity onPress={()=>setSign(!sign)}>
//         <Text >Login</Text>
//         </TouchableOpacity></>

//         </ScrollView>
//     }

//     </>
//     }</>
//     //client page
//     :<>
//      {error.message==="Logged In"?
//     page==="Home"?<Call/>:
//     page==="Map"?<Map userData={userData}/>:
//     page==="Stats"?<Statistics/>:
//     page==="User"?<Users userData={userData}/>:<Error/>
//     :<>{
//    sign?<><Text style={styles.heading}>Emergency System</Text>
//    {fals&&<Text style={{color:"red"}}>{fals}</Text>}
//     <Input name="Email" setLogData={setLogData} logData={logData}/>
//     <Input name="Password" setLogData={setLogData} logData={logData}/>
//     <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text>Submit</Text>
//     </TouchableOpacity>
//         <Text>Donot have Account?</Text>
//         <TouchableOpacity onPress={()=>setSign(!sign)}>
//         <Text >SignUp</Text>
//         </TouchableOpacity></>:
//         <ScrollView>
//         <><Text style={styles.heading}>Emergency System</Text>
//         {!error.message?<></>:<Text>{error.message}</Text>}
//     <Input name="Name" setLogData={setNewUser} logData={newUser}/>
//     <Input name="Password" setLogData={setNewUser} logData={newUser}/>
//     <Input name="Address" setLogData={setNewUser} logData={newUser}/>
//     <Input name="Number" setLogData={setNewUser} logData={newUser}/>
//     <Input name="Email" setLogData={setNewUser} logData={newUser}/>
//     <Input name="Age" setLogData={setNewUser} logData={newUser}/>
//     <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text>SignUp</Text>
//     </TouchableOpacity>
//         <Text>Have Account?</Text>
//         <TouchableOpacity onPress={()=>setSign(!sign)}>
//         <Text >Login</Text>
//         </TouchableOpacity></>
//         <Text>Is Server?</Text>
//         <TouchableOpacity onPress={()=>setServer()}>
//         <Text >Click Here</Text>
//         </TouchableOpacity>
//         </ScrollView>
//     }</>}</>}
//         </ScrollView>
//     </View>
//   )
// }
// const styles=StyleSheet.create({
//     heading:{
//     paddingTop:90,
//     fontFamily:'monospace',
//     fontSize:30,
//     fontWeight:"bold",
//     color:'red',
//     marginBottom:90
//   },button:{
//     width:60,
//      backgroundColor: "#009688",
//      paddingVertical:10,
//      paddingHorizontal:12,
//      width:"auto",
//      alignSelf:"center",
//      elevation:10,
//      borderRadius:3,
//      marginTop:40
//   }
// })

// export default Login
