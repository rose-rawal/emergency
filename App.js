import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  View,
} from "react-native";
import Login from "./Pages/login";
import Context from "./context/implement";
import Call from "./Pages/call";
import User from "./Pages/user";
import Map from "./Pages/map";

export default function App() {
  return (
    <Context>
      <SafeAreaView>
        <View>
          <Login />
          {/* <User/> */}
          {/* <Map/> */}
          {/* <Call/> */}
        </View>
      </SafeAreaView>
    </Context>
  );
}
