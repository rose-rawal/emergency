
import { Text, View, TextInput, StyleSheet } from "react-native";

const Input=({name,setLogData, logData})=>{
   
    
    return(
    <View>
        <Text style={styles.te}>{name}</Text>
        <TextInput style={styles.ti} 
        defaultValue={logData[name]}
        onChangeText={(e)=>{
            console.log(e);
            setLogData({...logData,[name]:e});
            console.log(logData)
            }}
            />
    </View>
)}
const styles=StyleSheet.create({
    ti:{
        backgroundColor:"white",
        height:40,
    },
    te:{
        marginTop:20,
        marginBottom:10
    }
})
export default Input