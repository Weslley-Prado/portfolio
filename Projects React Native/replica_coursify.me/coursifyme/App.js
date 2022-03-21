import * as React from 'react';
import Login from './Screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './Screen/Principal';
import { Image,   StyleSheet, View } from "react-native";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ 
            title: 
            <View style={styles.header}>
            <Image source={require('./assets/logo.png')} style={styles.logo}
            resizeMode="contain"/>
             <Image source={require('./assets/menu.png')}style={styles.menu}
            resizeMode="contain"/>
            </View>,
                       
          }}        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
      backgroundColor:'white',
      
  },
  menu:{
    width:30,
    height:30,
        

  },
  logo:{
    width:80, 
    height:60,

  }
})