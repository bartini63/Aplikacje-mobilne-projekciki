import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons} from "../../constants";
import { FormInput, TextButton} from "../../components";

import { utils } from "../../utils";

const SignUp = ( {navigation} ) => {

    function insertRecord (email, password){

        var InsertAPIURL = "http://192.168.0.16/AM_LOGIN/SignUp.php";   
    
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          
          var Data ={
            Email: email,
            Password: password
          };
    
          fetch(InsertAPIURL,{
            method:'POST',
            headers:headers,
            body: JSON.stringify(Data) //convert data to JSON
        })
    
        .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response)=>{
          alert(response[0].Message);       // If data is in JSON => Display alert msg
          navigation.navigate("SignIn");
        })
        .catch((error)=>{
            alert("[BŁĄD]" + error);
        })
    }


    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPass, setShowPass] = React.useState(false);

    const [emailError, setEmailError] = React.useState("");
    const [usernameError, setUsernameError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    function isEnableSignUp(){
        return email != "" && username != "" && password != ""
        && emailError == "" && passwordError == "" && 
        usernameError == ""
    }

   
    return (
        <AuthLayout
            title="Rejestracja"
            subtitle="Załóż nowe konto, aby móc zalogować się do naszej sieci restuaruacji."
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >

            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 5,
                    margin:10
                }}
            >

        <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {

                        utils.validateEmail(value, setEmailError)
                        setEmail(value)

                        
                    }}

                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            
                            <Image
                                source={email == "" || (email != "" 
                                && emailError == "") ? icons.correct : icons.cross}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? 
                                    COLORS.gray : (email !="" &&
                                    emailError == "") ? COLORS.
                                    green : COLORS.red
                                }}
                            
                            />
                        

                        </View>
                    }

                />

                            <FormInput
                                    label="Nazwa użytkownika"
                                    containerStyle={{
                                        marginTop: SIZES.radius
                                    }}
                                    onChange={(value) =>{
                                        setUsername(value)
                                    }}
                                    errorMsg={usernameError}
                                    appendComponent={
                                        <View
                                            style={{
                                                justifyContent: 'center'
                                            }}
                                        >

                                            <Image
                                                source={username == "" ||
                                                (username != "" && usernameError
                                                == "") ? icons.correct : icons.cancel}

                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: username == "" ?
                                                COLORS.gray : (username != "" &&
                                                usernameError == "") ?
                                                COLORS.green : COLORS.red
                                            }}
                                            />

                                        </View>
                                    }
                                />

                            <FormInput
                                label="Hasło"
                                secureTextEntry={!showPass}
                                autoCompleteType='password'
                                containerStyle={{
                                    marginTop: SIZES.radius
                                }}
                                onChange={(value) => {
                                    utils.validatePassword(value,
                                    setPasswordError)
                                    setPassword(value)
                                }}

                                errorMsg={passwordError}
                                appendComponent={
                                    <TouchableOpacity
                                        style={{
                                            width: 40,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center'
                                        }}
                                        onPress={() => setShowPass(!showPass)}
                                    >
                                        <Image
                                            source={showPass ? icons.eye_close: 
                                                icons.eye_open}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: COLORS.gray
                                            }}
                                        />

                                        </TouchableOpacity>
                                    }
                                />

                                
                                <TextButton
                                label="Załóż konto"
                                disabled={isEnableSignUp() ? false : true}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: 'center',
                                    marginTop: SIZES.padding * 4,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: isEnableSignUp() ? 
                                    COLORS.primary : COLORS.transparentPrimary
                                }}
                                onPress={() => insertRecord(email, password)}

                                />

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: SIZES.radius,
                                        justifyContent: 'center'
                                    }}
                                >

                                    <Text
                                        style={{
                                            color: COLORS.darkGray,
                                            ...FONTS.body3
                                        }}
                                    >
                                        Masz już konto?
                                    </Text>

                                    <TextButton
                                        label="Zaloguj się"
                                        buttonContainerStyle={{
                                            marginLeft: 3,
                                            backgroundColor: null
                                        }}
                                        labelStyle={{
                                            color: COLORS.primary,
                                            ...FONTS.h4
                                        }}
                                        onPress={() => navigation.goBack()}
                                    />


                                </View>


                    </View>

             </AuthLayout>
        
    )
}

export default SignUp;