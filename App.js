import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableWithoutFeedback, Text, TextInput, SafeAreaView,Image } from 'react-native';
import Login from './Pages/login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Login/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:"#f0e68c"
  }
  
});
