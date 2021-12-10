import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import { SIZES, COLORS, IMAGES, icons} from "../constants";
import {TextButton} from "../components";
import { Home, Cart, SignIn } from "../screens";

const screenTexts = {
    user: "Bartosz",
    email: "bartini63@gmail.com",
    cart: "Wartość koszyka wynosi: 0 zł",
}

const Account = ({navigation}) => {
    return (
<View
        style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                marginTop: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >

            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                    marginTop: SIZES.padding * 4
                    
                    
                }}
            >

            <Image
                source={require("../assets/images/profile.png")}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius * 2,
                }}

            />

            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    marginTop: 40,
                   
                }}
            >
                <Image
                    source={icons.user}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                    }}
                >

                </Image>

                <Text style={{fontSize: 28}}>
                    {screenTexts.user}
                </Text>

            </View>

            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    marginTop: 40,
                }}
            >
                <Image
                    source={icons.email}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                    }}
                >

                </Image>

                <Text style={{fontSize: 28}}>
                    {screenTexts.email}
                </Text>

            </View>

            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    marginTop: 40,
                }}
            >
                <Image
                    source={icons.cart}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        tintColor: '#000000'
                    }}
                >

                </Image>

                <Text style={{fontSize: 28}}>
                    {screenTexts.cart}
                </Text>

            </View>

            <TextButton
                        label="Wyświetl koszyk"
                        buttonContainerStyle={{
                        height: 60,
                        width: 200,
                        alignItems: 'center',
                        marginTop: 40,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                        }}
                        onPress={() => navigation.navigate("Cart")}
                    />

            <TextButton
                        label="Złóż zamówienie"
                        buttonContainerStyle={{
                        height: 60,
                        width: 200,
                        alignItems: 'center',
                        marginTop: 40,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                        }}
                        onPress={() => navigation.navigate("Home")}
                    />

            <TextButton
                        label="Wyloguj się"
                        buttonContainerStyle={{
                        height: 60,
                        width: 200,
                        alignItems: 'center',
                        marginTop: 40,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                        }}
                        onPress={() => navigation.replace("SignIn")}
                    />


            </View>
    </View>

    )
        }

export default Account
