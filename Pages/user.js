import { useContext } from 'react'
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import Application from '../layout/application'
import context from '../context/maincontext'

const Users = () => {
    // const {userData}=useContext(abc)
    const {error,setError}=useContext(context)
    console.log(error)
    const handlePress=()=>{
      setError({message:"Not Logged In"});
    }
  return (
   <Application>
    <Text>Hello world</Text>
    <TouchableOpacity style={styles.logout} onPress={()=>{handlePress()}}><Text style={styles.log}>Logout</Text></TouchableOpacity>
   </Application>
  )
}
const styles=StyleSheet.create({
  logout:{
    backgroundColor:"black",
    // paddingVertical:20,
    width:80,
    flex:0.08,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  },
  log:{
    color:"white",
    fontWeight:"bold"
  }
})

export default Users