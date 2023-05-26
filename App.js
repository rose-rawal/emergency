import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableWithoutFeedback, Text, TextInput, SafeAreaView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/login';
import Call from './Pages/call';
import Map from './Pages/map';

import Context from './context/implement'
import Statistics from './Pages/statisics';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Context>
       {/* <SafeAreaView style={styles.container}> */}
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Call" component={Call}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="Statistics" component={Statistics}/>
      
      </Stack.Navigator>  
    {/* </SafeAreaView> */}
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
