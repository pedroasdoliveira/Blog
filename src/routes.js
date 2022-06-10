import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/home";
import Detail from "./pages/details/details";
import CategoryPosts from "./pages/categoryPosts/categoryPosts";
import Search from "./pages/Search/Search";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown: false
        }}
      />

      <Stack.Screen 
        name="Details" 
        component={Detail} 
        options={{
            title: 'Detalhes',
            headerTintColor: '#f4f5f9',
            headerStyle: {
                backgroundColor: '#232630'
            }
        }}
      />

      <Stack.Screen 
        name="Category" 
        component={CategoryPosts}
        options={{
            headerTintColor: '#f4f5f9',
            headerStyle: {
                backgroundColor: '#232630'
            }
        }} 
      />

      <Stack.Screen 
        name="Search" 
        component={Search}
        options={{
            title: 'Procurando Algo?',
            headerTintColor: '#f4f5f9',
            headerStyle: {
                backgroundColor: '#232630'
            }
        }} 
      />
    </Stack.Navigator>
  );
};

export default Routes;
