import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from './navigation/tabs'
import CustomDrawer from './navigation/CustomDrawer';

import {Restaurant, OrderDelivery, SignIn, SignUp, Cart} from './screens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            
            }}
            initialRouteName={"SignIn"}
        >

            <Stack.Screen name="Home" component={Tabs} options={{
                headerShown:false,
            }} />

            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="OrderDelivery" component={OrderDelivery} />

            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} />

           
            
        </Stack.Navigator>

    </NavigationContainer>
)

}

export default App;