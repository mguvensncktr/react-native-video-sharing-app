import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RecordScreen from '../screens/RecordScreen';
import {
    Entypo,
    AntDesign,
    MaterialCommunityIcons,
    Ionicons
}
    from "@expo/vector-icons";
import uploadIcon from '../assets/images/plus-icon.png'
import { Image } from "react-native";

const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: '#fff',
        }}
        >
            <Tab.Screen name={"Home"} component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => (<Entypo name="home" size={25} color={color} />) }}
            />
            <Tab.Screen name={"Discover"} component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => (<AntDesign name="search1" size={25} color={color} />) }}
            />
            <Tab.Screen name={"Upload"} component={RecordScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={uploadIcon} style={{ height: 40, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: () => null
                }}
            />
            <Tab.Screen name={"Inbox"} component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="message-minus-outline" size={25} color={color} />) }}
            />
            <Tab.Screen name={"Profile"} component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => (<Ionicons name="person-outline" size={25} color={color} />) }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;