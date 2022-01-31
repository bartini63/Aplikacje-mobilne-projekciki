import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons} from "../../constants";

import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const SignIn = ({ navigation })  => {

    function checkRecord(){

        var APIURL = "http://192.168.0.16/AM_LOGIN/login.php";

        var headers = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          };
        
        
        var Data ={
            Email: email,
            Password: password
        };

        fetch(APIURL,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
          })
          .then((Response)=>Response.json())
          .then((Response)=>{
            alert(Response[0].Message)
            if (Response[0].Message == "Udalo Ci sie zalogowac pomyslnie!") {
              navigation.navigate("Home");
            }
            console.log(Data);
          })
          .catch((error)=>{
            console.error("[BŁĄD]" + error);
          })
        }
    

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);


    return (
        <AuthLayout
            title="Zaloguj się"
            subtitle="Witaj. Skąd to zwątpienie. Może zalogujesz się i zamówisz coś pysznego?"
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
                                label="Hasło"
                                secureTextEntry={!showPass}
                                autoCompleteType='password'
                                containerStyle={{
                                    marginTop: SIZES.radius
                                }}
                                onChange={(value) => setPassword(value)}
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
                                        >


                                        </Image>

                                    </TouchableOpacity>
                                }
                                />

                                <TextButton
                                    label="Zaloguj się"
                                    buttonContainerStyle={{
                                        height: 55,
                                        alignItems: 'center',
                                        marginTop: 40,
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.primary
                                    }}
                                    onPress={() => checkRecord(email, password)}
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
                                        Nie posiadasz jeszcze konta?
                                    </Text>

                                    <TextButton
                                        label="Zarejestruj się"
                                        buttonContainerStyle={{
                                            marginLeft: 3,
                                            backgroundColor: null
                                        }}
                                        labelStyle={{
                                            color: COLORS.primary,
                                            ...FONTS.h4
                                        }}
                                        onPress={() => navigation.navigate
                                        ("SignUp")}
                                    />


                                </View>


            </View>
        </AuthLayout>

        
    )
}

export default SignIn;