import { Input } from '@react-native-elements/base';
import { Button, Text, CheckBox } from '@react-native-elements/themed';
import { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [document, setDocument] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorName, setErrorName] = useState(null)
  const [errorDocument, setErrorDocument] = useState(null)
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)

  const validar = () => {
      let error = true
      setErrorEmail(null)
      setErrorDocument(null)
      if(email == null){
          setErrorEmail("Preencha seu e-mail corretamente")
          error= true
      }
      if(document == null) {
          setErrorDocument("Preencha seu documento corretamente")
          error = true
      }
      return !error
      }

  


  const salvar = () => {
      if (validar()){
      console.log("Salvou")
      }
  }
  

  return (
    <View style={styles.container}>
      <Text h3>Bem-vindo faça seu login</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        errorMessage={errorEmail}
      />
     <Input
        placeholder="Name"
        onChangeText={value => setName(value)}
        errorMessage={errorName}

      />
        <Input
        placeholder="Document"
        onChangeText={value => setDocument(value)}
        keyboardType="number-pad"
        returnKeyType='done'
        errorMessage={errorDocument}

      />
        <Input
        placeholder="Phone"
        onChangeText={value => setPhoneNumber(value)}
        keyboardType="phone-pad"
        returnKeyType='done'
        errorMessage={errorPhoneNumber}

      />

      <CheckBox 
       title="Eu aceito os termos de uso"
       checkedIcon="check"
       uncheckedIcon="square-o"
       checkedColor="green"
       uncheckedColor = "red"
       checked={isSelected}
       onPress = {()=> setSelected(!isSelected)}
      />
    
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
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

