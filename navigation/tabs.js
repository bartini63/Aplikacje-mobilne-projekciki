import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"


import { Home, Cart } from "../screens";
import CustomDrawer from '../navigation/CustomDrawer';
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

function BottomMenu() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ],
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component ={Home}
                options={{
                        headerShown:false,
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.cutlery}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Cart"
                component ={Cart}
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.cart}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                    ),
                    
                }}
            />

            <Tab.Screen
                name="Account"
                component ={CustomDrawer}
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                    )
                }}
            />
        </Tab.Navigator>

    )
}

const Tabs = () => {
    return(
        <View style={{
            flex:1,
            marginBottom:0
        }}
        >
    {BottomMenu()}
    </View>

    )
}

export default Tabs;