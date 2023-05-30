import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet,TouchableWithoutFeedback, Text, TextInput, SafeAreaView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Context from './context/implement'

import {def} from '../emergency/layouts/def'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Context>
       {/* <View style={styles.container}> */}
    <Stack.Navigator initialRouteName="Login">
    {def.map((i,index)=>{
     
     return(<Stack.Screen key={index} name={`${i.name}`} component={i.comp}  />)
    })
  }
  </Stack.Navigator>
  { /* } 
     <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name="Call" component={Call}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="Statistics" component={Statistics}/>
      <Stack.Screen name="Application" component={Application}/>
      </Stack.Navigator>   */}
    {/* </View> */}
    </Context>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
    backgroundColor:"#f0e68c"

  }
  
});
