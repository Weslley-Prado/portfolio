import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <Text> Entre no Cousifyme</Text>
    </View>
  )
}

const syles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent: 'center'
  }
})