import { Image } from "@react-native-elements/themed";
import React from "react";
import { View,  SafeAreaView, StyleSheet } from "react-native";


export default function Principal(){
    return(
        <SafeAreaView>
        <View style={styles.header}>
           
        </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth:2,
        borderBottomColor:'#FFF',
        backgroundColor:'white'

    }
})