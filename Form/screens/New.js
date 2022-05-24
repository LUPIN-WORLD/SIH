import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import  DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import axios from "axios";
import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TestLink,
    TestLinkContent,
    WelcomeContainer,
} from '../../components/styles';
const {brand, darkLight, primary} = Colors;

const New = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer cont={true}>
           <StatusBar style="dark" />
           <InnerContainer>
           <WelcomeContainer>
           <PageTitle tak={true}>Take Assessment! To check health status</PageTitle>
                
              
              <Formik initialValues={{name: '', email: '', dateOfBirth: '', password: '',confirmPassword: ''}}
                  onSubmit={(values, {setSubmitting}) => {
                    values = {...values, dateOfBirth: dob};
                    if (values.email == '' || values.password == '' || values.name == '' || values.dateOfBirth == '' || values.confirmPassword == '') {
                        handleMessage("Please fill all the fields");
                        setSubmitting(false);
                    }
                    else if (values.password !== values.confirmPassword) {
                        handleMessage("Password do not match");
                        setSubmitting(false);
                    }
                    else {
                        handleSignup(values, setSubmitting);
                    }
                  }}>

                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => <StyledFormArea>
                    
                       

                        
                      <MyTextInput 
                          label="State"
                          icon="person"
                          placeholder="Kurukshetra"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('state')}
                          onBlur={handleBlur('state')}
                          value={values.state}
                          
                      />
                      <MyTextInput 
                          label="Country"
                          icon="person"
                          placeholder="India"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('country')}
                          onBlur={handleBlur('country')}
                          value={values.country}
                          
                      />

                      


                      <Line />

                       <StyledButton onPress={() => {navigation.navigate("App")}}>
                          <ButtonText>Start</ButtonText>
                      </StyledButton>
                   
                      
                     
                  </StyledFormArea>}
                  
              </Formik>
              </WelcomeContainer> 
           </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isDate, isTime, showMode, showDatePicker, isPassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
               
                <StyledTextInput {...props} />
                
            )}
        </View>
    );

};

export default New;