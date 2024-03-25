import { View, Text, TextInput,StyleSheet } from 'react-native'
import React  from 'react'
import { Formik, useFormik } from 'formik';
import validationSchema from './validations';
import { Input, FormControl, WarningOutlineIcon, Box, Center, NativeBaseProvider, Button} from "native-base";
const FormWithFormik = () => {
    const { values, errors,touched, isSubmitting, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
        username:'',
            email: '',
            password: '',
            passwordC: '',
    },
    /*
    onSubmit: (values) => {
        console.log(values);
    },   doldurdultan sonra form resetlemek için "bag" komutu
    */
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      console.log(bag);
    
      if(values.email === 'test@test.com') {
        return bag.setErrors({ email: "Bu mail adresi kullanılıyor"})
      }
 


      bag.resetForm(); // Formları Resetleme... 
    },
   validationSchema: validationSchema, 
});
  return (
    <View style={styles.container}>
      <Box alignItems="center" mb ={2}>
      <FormControl isInvalid={errors.username && touched.username} w="100%" /*maxW="300px"/*/>
        <FormControl.Label> </FormControl.Label>
        <Input placeholder="Username" 
        value={values.username}
      onChangeText={handleChange("username")}
       onBlur={handleBlur("username")}     
       editable={!isSubmitting} 
       height={50}
       fontSize={20}/>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.username}
        </FormControl.ErrorMessage>
      </FormControl>
      </Box> 

      <Box alignItems="center" mb ={2}>
      <FormControl isInvalid={errors.email && touched.email} w="100%" /*maxW="300px"/*/>
        <FormControl.Label></FormControl.Label>
        <Input placeholder="E-Mail" 
        value={values.email}
      onChangeText={handleChange("email")}
       onBlur={handleBlur("email")}   
       autoCapitalize= 'none'
       keyboardType="email-address"
       editable={!isSubmitting}
       height={50}
       fontSize={20} />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.email}
        </FormControl.ErrorMessage>
      </FormControl>
      </Box>
      <Box alignItems="center" mb ={2}>
      <FormControl isInvalid={errors.password && touched.password} w="100%" /*maxW="300px"/*/>
        <FormControl.Label></FormControl.Label>
        <Input placeholder="Password" 
         secureTextEntry
         value={values.password}
         onChangeText={handleChange("password")}
         onBlur={handleBlur("password")}
         editable={!isSubmitting}
         height={50}
       fontSize={20}
          />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.password}
        </FormControl.ErrorMessage>
      </FormControl>
      </Box>
      <Box alignItems="center" mb ={2}>
      <FormControl isInvalid={errors.passwordC && touched.passwordC} w="100%" /*maxW="300px"/*/>
        <FormControl.Label></FormControl.Label>
        <Input
       placeholder='Password Confirm'
       secureTextEntry
       value={values.passwordC}
       onChangeText={handleChange("passwordC")}
       onBlur={handleBlur("passwordC")}
       editable={!isSubmitting}
       height={50}
       fontSize={20}
          />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.passwordC}
        </FormControl.ErrorMessage>
      </FormControl>
      </Box>
    <Button  size={"lg"} 
    onPress={handleSubmit} 
    disabled={isSubmitting} 
    isLoadingText="Submitting"
    isLoading={isSubmitting}
    >
          REGİSTER
        </Button>
    </View>
  );                      
}


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

 },
 error:{
  color:"red",
 }
})


export default FormWithFormik