import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext, useEffect, useState } from 'react'
import { delStats } from '../../api/statistics';
import { storeStats } from '../../api/statistics';

import context from '../../context/maincontext'
function Form(props) {
const [change,setChange] = useState('');
const [message,setMessage] = useState();   
const {setPage,setShowForm} = useContext(context);
    const msg= props.data;
    let affectedArea;
    const phone = msg.phone.toString();
 
    const handleMap = () => {
      console.log("Here the message is",affectedArea);

   
       
      // Handle form submission here
        // You can access the form values (name, age, email, phone) and perform necessary actions
        setPage("Map")
        console.log('Checked Service:', props.data );
      };
  function changeHandler(text)
  {
setChange(text);

console.log(text);
  }
  function handleDelete(){
    affectedArea=change;

    console.log("Saved the record")
    setShowForm(false);
    storeStats({...msg,affectedArea});

    // delStats();
    alert("submitted");

  }
      return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
       
        value={props.data.name}
        editable={false}
      />
      <TextInput
        style={styles.input}
       onChangeText={changeHandler}
        placeholder='City Name'
        editable={true}
      />
      <TextInput
        style={styles.input}
       
        value={props.data.email}
        editable={false}
      />
      <TextInput
        style={styles.input}
       
        value={phone}
        editable={false}
      />
    <View style={styles.butts}>  
      <TouchableOpacity  style={styles.buttonContainer} onPress={handleMap}>
       <Text>CheckMap</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.buttonContainer} onPress={handleDelete}>
       <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      butts:{
display:"flex",
flexDirection:'row',
      },
      input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 16,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        fontSize: 16,
        fontWeight:'900',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      buttonContainer: {
        marginRight:90,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
      },

    });
export default Form
