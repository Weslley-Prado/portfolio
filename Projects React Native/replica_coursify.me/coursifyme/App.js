import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import   Icon from "react-native-vector-icons/FontAwesome";


class App extends Component{
  constructor(props){
    super(props);
     const [email, setEmail] = useState(null)
     const [password, setPassword] = useState(null)
    
    };
    render(){
    return(
     <View style={styles.container}>
      <Text h3> Entre no Cousifyme</Text>
      <Input 
      placeholder="E-mail"
      leftIcon={{type: 'font-aesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />
       <Input 
      placeholder="Password"
      leftIcon={{type: 'font-aesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true} 
      />
< Button 
icon={
  <Icon
   name="arrow-right"
   size={15}
   color = 'white'
   />
}
title="Entrar"

/>


      />
    </View>  
    );
  }

}
    





const syles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent: 'center'
  }
})