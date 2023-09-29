import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <View>
      <Text style={{fontSize: 30, marginLeft: 10}}>Registration Form</Text>
      <TextInput
      placeholder=' Enter Username'
      onChangeText={(text)=>setName(text)}
      value={name}
      style={styles.textInput}
      />
      <TextInput
      placeholder=' Enter Email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      style={styles.textInput}
      />
      <TextInput
      placeholder=' Set Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      style={styles.textInput}
      />
      <View style = {{margin:10}}>
      <Button color={'green'} title='Get Details' onPress={()=>setDisplay(true)}/>
      </View>
      <View style = {{margin:10}}>
      <Button color={'red'} title='Reset Details' onPress={resetFormData}/>
      </View>
      <View>
        {
          display ?
          <View>
            <Text style={{fontSize:25 , marginLeft:10}}>Username is : {name}</Text>
            <Text style={{fontSize:25 , marginLeft:10}}>Email is : {email}</Text>
            <Text style={{fontSize:25 , marginLeft:10}}>Password is : {password}</Text>
          </View>
          : null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})

export default App;

