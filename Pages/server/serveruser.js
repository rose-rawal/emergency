import React, { Component, useContext, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Modal,
  Button,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Application from "../../layout/application";

import context from "../../context/maincontext";
import { getOneServer } from "../../api/servers";

const ServerUser = (userData) => {
  const {error,setError}=useContext(context);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getuser = async () => {
      const abc = await getOneServer((_id = userData.userData));
      setCurrentUser(abc);
      console.log("Value of abc :",abc);
      

    };
    getuser();
  }, []);
  const handleLogout = () => {
    setConfirmLogOut(true);
    console.log(confirmLogOut);
    console.log("Cureent User",currentUser);
  };
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  return (
    <Application>
      <View>
        <ScrollView style={{ marginTop: -20 }}>
          <View style={{ width: "100%", backgroundColor: "#000", height: 200 }}>
            <TouchableOpacity>
              <Image
                source={require("../../pic/black.jpg")}
                style={{ width: "100%", height: "100%", margin: 0 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../pic/userp.jpg")}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                marginTop: -70,
              }}
            ></Image>
            <Text style={styles.text}>{currentUser.name || "unkown"}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Age: {currentUser.age|| "unkown"}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>
              Gender: {currentUser.gender || "unavailable"}
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>
              Height:{currentUser.height || "unavailable"}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>
              Blood Group: {currentUser.blood || "unavailable"}
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Contact:{currentUser.phone|| "unkown"}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleLogout();
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {confirmLogOut && (
        <View style={styles.opac}>
          <View style={styles.modalContent}>
            <Text style={{ color: "white" }}>
              DO YOU REALLY WANT TO LOG OUT?
            </Text>
            <View style={styles.confirm}>
            <Button
              title="YES"
  
              onPress={() => {
                setError({message:"Logged Out"})
                setConfirmLogOut(false);
              }}
            />
            <View style={{width:"30%"}}></View>
            <Button
              title="No"
              
              onPress={() => {
                setConfirmLogOut(false);
              }}
            />
            </View>
          </View>
        </View>
      )}
    </Application>
  );
};

export default ServerUser;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    borderRadius: 20,
    width: "90%",
    paddingBottom: 5,
    marginTop: 30,
    backgroundColor: "#4F709C",
  },

  text: {
    fontSize: 18,
    padding: 10,
    color: "white",
  },
  button: {
    position: "absolute",
    marginTop: 20,
    right: 10,
  },
  modalContent: {
    flex: 1,

    backgroundColor: "black",
    width: "70%",
    paddingVertical:30,
    // height: "20%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    top: "50%",
    left: "15%",
  },
  opac: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    backgroundColor: "black",
    position: "absolute",
  },
  confirm:{
    flex:1,
    flexDirection:"row",
    marginTop:20,
  }
});
