import React,{Component, useEffect, useState} from 'react';
import {View , ScrollView, TouchableHeight, TouchableOpacity,Image,Text} from 'react-native';
import Application from '../layout/application';
import { getOneUser } from '../api/users';

const  User = (userData) => {
  const [currentUser,setCurrentUser]=useState({})
  useEffect(()=>{
    const getuser=async()=>{
    const abc=await getOneUser(_id=userData.userData)
    setCurrentUser(abc);
    console.log(abc);
  }
  getuser()
  },[])
  
  return (
    <Application>
    <View>
                <ScrollView>
                    <View style={{padding:10 ,width:'100%',backgroundColor: '#000',height :200}}>
            <TouchableOpacity>
               <Image source={require('../pic/black.jpg')} style={{ width:30, height:30}}></Image>
            <View></View>
            <View></View>
            </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Image source={require('../pic/userp.jpg')} style={{width:140 , height:140,borderRadius:100,marginTop:-70}}></Image>
                   <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>{currentUser.name}</Text>
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:5,
                        marginTop: 20
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Age: {currentUser.age}</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>
                    Gender: {currentUser.gender||'unavailable'}
                    </Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:5,
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Height:{currentUser.height||'unavailable'}</Text>
                        
                    </View>
                    
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Blood Group: {currentUser.blood||'unavailable'}</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5,
                        marginBottom:40
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Contact:{currentUser.phone}</Text>
                        
                    </View>
 <TouchableOpacity><Text style={styles.log}>Logout</Text></TouchableOpacity>

                </ScrollView>
            </View>
        </Application>
        )
  
}


export default  User;
 <TouchableOpacity style={styles.logout} onPress={()=>{handlePress()}}><Text style={styles.log}>Logout</Text></TouchableOpacity>
