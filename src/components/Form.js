import { View, Text, TextInput,StyleSheet, Button } from 'react-native'
import React  from 'react'
import { useState } from 'react';
const Form = () => {
  const [form, setForm]=useState({
    username:"",
    email: "",
    password: "",
    passwordC: "",
  })
    // const [username,setUsername]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    // const [passwordC,setPasswordC]=useState("");

       const handlesubmit = () => {
      // console.log({ username, email, password, passwordC });
         console.log({ form });
    };
    const handleChange = (text,input) =>{
      setForm((prev) => ({... prev, [input]: text }));
    };

  return (
    <View style={styles.container}>
        <View style={styles.item}>
      <TextInput style={styles.input}
       placeholder='username'
       value={form.username}
       onChangeText={(text)=> handleChange(text, "username")}
       />
    </View>
    <View style={styles.item}>
      <TextInput style={styles.input}
       placeholder='email'
       autoCapitalize= 'none'
       keyboardType="email-address"
       value={form.email}
       onChangeText={(text)=> handleChange(text, "email")}

       />
    </View>
    <View style={styles.item}>
      <TextInput style={styles.input}
       placeholder='password'
       secureTextEntry
       value={form.password}
       onChangeText={(text)=> handleChange(text, "password")}

       />
    </View>
    <View style={styles.item}>
      <TextInput style={styles.input}
       placeholder='passwordC'
       secureTextEntry
       value={form.passwordC}
       onChangeText={(text)=> handleChange(text, "passwordC")}
       />
    </View>
    <View style={styles.item}>
        <Button title="Register" onPress={handlesubmit} />
    </View>
    </View>
    
  )
};



const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding:20,
    },
    item: {
        marginBottom:4,
    },
  input: {
    alignContent:"center",
    borderWidth:1,
    borderColor: '#999',
    padding: 10,
    fontSize: 24,
    width: "100%",

 }
})


export default Form