import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {Formik, useField} from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText.jsx'
import {loginValidationSchena} from '../validationsSchemas/login.js'
const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize : 12,
        marginBottom: 20,
        marginTop: 5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) =>{
    const [field, meta, helpers] = useField(name)

    return (
        <>
        <StyledTextInput 
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
        {meta.error && <StyledText style={styles.error}>
        {meta.error}
        </StyledText>}
        </>
                    
    )
}

export default function LogInPage(){
    return <Formik validationSchema={loginValidationSchena} initialValues={initialValues} onSubmit={
        values => console.log(values)}>
            {({handleSubmit})=>{
                return <View>
                    
                    <FormikInputValue 
                    name='email'
                    placeholder='E-mail'
                    />
                    <FormikInputValue 
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    />
                    <Button onPress={handleSubmit} title='Log In' />
                </View>
            }}
        </Formik>
}