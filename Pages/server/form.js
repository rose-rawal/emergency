import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext, useState } from 'react'
import context from '../../context/maincontext'
function Form(props) {

    const {setPage} = useContext(context);
    const age = props.data.age.toString();
    const phone = props.data.phone.toString();
    
    const handleSubmit = () => {
        // Handle form submission here
        // You can access the form values (name, age, email, phone) and perform necessary actions
        setPage("Map")
        console.log('Checked Service:', props.data.age );
      };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
       
        value={props.data.name}
        editable={false}
      />
      <TextInput
        style={styles.input}
       
        value={age}
        editable={false}
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
      
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
       <Text>Checksasas</Text>
      </TouchableOpacity>
      
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
        width: '100%',
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
