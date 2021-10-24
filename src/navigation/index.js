import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreatePost from "../screens/CreatePost";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: true, title: 'TikTok Yarat' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;