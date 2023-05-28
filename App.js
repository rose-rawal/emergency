import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableWithoutFeedback, Text, TextInput, SafeAreaView,Image } from 'react-native';
import Login from './Pages/login';
import Context from './context/implement'
export default function App() {
  return (
    <Context>
    <SafeAreaView >
    <Login/>
    
    </SafeAreaView>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:"#f0e68c"
  }
  
});
