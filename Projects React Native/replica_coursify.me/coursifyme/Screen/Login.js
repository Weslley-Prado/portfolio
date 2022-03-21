import { Input } from '@react-native-elements/base';
import { Button, Text } from '@react-native-elements/themed';
import { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";
import styles from '../style/MainStyle';


export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
      navigation.reset({
          index:0,
          routes:[{name:"Principal"}]
      })
    
  }
  const cadastrar = () => {
      navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3>Bem-vindo faça seu login</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />
        <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => cadastrar()}
      />
      
    </View>
  );
}

const specificStyle = StyleSheet.create({
    button:{
        width: "100%",
        marginTop:10
    }
})

