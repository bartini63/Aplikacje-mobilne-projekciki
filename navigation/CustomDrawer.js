import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Home, Cart, Account, SignIn } from "../screens";

import{
    createDrawerNavigator, DrawerContentScrollView,
} from "@react-navigation/drawer";



import {
    COLORS,
    FONTS,
    SIZES,
    images,
    icons,

} from "../constants";

const myProfile = {
    name: "Bartosz",
    profile_image: images.profile,
    address: "Ostrowiec Świętokrzyski, Os. Słoneczne 21/13"
}

const screens = {
    home: "Strona główna",
    cart: "Koszyk",
    help: "Wsparcie",
    logout: "Wyloguj się"
}


const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex:1}}
        >
            <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.radius,
                paddingTop: 15
            }}
            >
                {/* CLOSE */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >

                <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    onPress={() => navigation.closeDrawer()}
                    >

                <Image
                    source={icons.cross}
                    style={{
                        height:35,
                        width:35,
                        tintColor: COLORS.black
                    }}
                  />  
                    </TouchableOpacity>
                    </View>

            {/* PROFIL */}        
            <TouchableOpacity
            style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                alignItems: 'center'
            }}
            onPress={() => console.log("Profil")}
            >

                <Image
                source={myProfile?.profile_image}
                style={{
                    width:50,
                    height:50,
                    borderRadius: SIZES.radius
                }}
                />

            <View
            style={{
                marginLeft: SIZES.radius
            }}
            >

                <Text style={{ color: COLORS.black, ...
                    FONTS.h3 }}>{myProfile?.name}</Text>
                
            </View>

            </TouchableOpacity>

            {/* Pozostałe opcje */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                <TouchableOpacity
        style={styles.main}
        onPress={() => navigation.navigate("Home")}
        >
            <Image
            source={icons.home}
            style={{
                width:20,
                height:20,
                tintColor: COLORS.black
            }}
            />

            <Text
                style={{
                    marginLeft:15,
                    color: COLORS.black,
                    ...FONTS.h3
                }}
            >
               {screens.home}

            </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.main}
        onPress={() => navigation.navigate("Cart")}
        >
            <Image
            source={icons.cart}
            style={{
                width:20,
                height:20,
                tintColor: COLORS.black
            }}
            />

            <Text
                style={{
                    marginLeft:15,
                    color: COLORS.black,
                    ...FONTS.h3
                }}
            >
               {screens.cart}

            </Text>
        </TouchableOpacity>

            <View
                style={{
                    height: 1,
                    marginVertical: SIZES.radius,
                    backgroundColor: COLORS.darkgray
                }}
            />

        <TouchableOpacity
        style={styles.main}
        onPress={() => navigation.navigate("Home")}
        >
            <Image
            source={icons.help}
            style={{
                width:20,
                height:20,
                tintColor: COLORS.black
            }}
            />

            <Text
                style={{
                    marginLeft:15,
                    color: COLORS.black,
                    ...FONTS.h3
                }}
            >
               {screens.help}

            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.main}
        onPress={() => navigation.replace("SignIn")}
        >
            <Image
            source={icons.logout}
            style={{
                width:20,
                height:20,
                tintColor: COLORS.black
            }}
            />

            <Text
                style={{
                    marginLeft:15,
                    color: COLORS.black,
                    ...FONTS.h3
                }}
            >
               {screens.logout}

            </Text>
        </TouchableOpacity>

            </View>

            </View>
        </DrawerContentScrollView>
            
    )
}

const CustomDrawer = () => {
    return (
        <View
        style={{
            flex:1,
            backgroundColor: COLORS.primary
        }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex:1,
                    width: '65%',
                    paddingRight:20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName="Account"
                drawerContent={ props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
                >
                    <Drawer.Screen name="Account">
                        {props => <Account {...props} />}
                    </Drawer.Screen>
                </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {

    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    marginTop:25,
    alignItems: 'center',
    paddingLeft: 0,
    borderRadius: SIZES.base,

}

});

export default CustomDrawer;