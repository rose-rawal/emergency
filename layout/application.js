import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { def, ser } from "./default.js";
import { useContext, useState } from "react";

import context from "../context/maincontext.js";
export const hei = Dimensions.get("window").height;
export const wid = Dimensions.get("window").width;

const Application = ({ children }) => {
  const [pressed, setPressed] = useState(null);
  const { page, setPage, isServer } = useContext(context);

  return (
    <View style={styles.main}>
      <View style={styles.child}>{children}</View>

      {!isServer ? (
        <View style={styles.nav}>
          {def.map((n) => {
            return (
              <TouchableOpacity
                key={n.name}
                style={[
                  styles.ele,
                  pressed === n.name && {
                    backgroundColor: "blue", // Much darker background when pressed
                  },
                ]}
                onPressIn={() => setPressed(n.name)} // Set the pressed button id
                onPressOut={() => setPressed(null)}
                onPress={() => {
                  setPage(n.name);
                }}
              >
                <Text style={styles.text}>{n.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <View style={styles.nav}>
          {ser.map((n) => {
            return (
              <TouchableOpacity
                key={n.name}
                style={[
                  styles.ele,
                  pressed === n.name && { backgroundColor: "blue" },
                ]}
                onPressIn={() => setPressed(n.name)} // Set the pressed button id
                onPressOut={() => setPressed(null)}
                onPress={() => {
                  setPage(n.name);
                }}
              >
                <Text style={styles.text}>{n.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // marginTop: 10,
  },

  child: {
    paddingTop: 20,
    backgroundColor: "#001133",
    height: hei * 0.95,
  },
  nav: {
    backgroundColor: "#3c4f66",
    flexDirection: "row",
    width: "100%",
    height: "5%",
  },
  ele: {
    padding: 10,
    borderStyle: "solid",
    borderLeftWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    flex: 1 / 3,
    borderColor: "  red",
  },
  text: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});

export default Application;
