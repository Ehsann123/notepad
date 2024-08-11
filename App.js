import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from "./screens/signup";
import Login from "./screens/Login";
import FaceRegister from "./screens/faceRegister"; 
import FaceConfirm from "./screens/faceConfirm";
import CreateNotes from "./screens/createNotes";

const Stack = createNativeStackNavigator();

function App() {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
      if (fontsLoaded) {
        setHideSplashScreen(true);
      }
    };

    checkAuthStatus();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            // Authenticated screens
            <>
              <Stack.Screen
                name="createNotes"
                component={CreateNotes}
                options={{ headerShown: false }}
              />
              {/* Add other authenticated screens here if needed */}
            </>
          ) : (
            // Unauthenticated screens
            <>
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="faceRegister"
                component={FaceRegister}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="faceConfirm"
                component={FaceConfirm}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}

export default App;