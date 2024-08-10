import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import SignUp from "./screens/signup";
import Login from "./screens/Login";
import FaceRegister from "./screens/faceRegister"; 
import FaceConfirm from "./screens/faceConfirm";
import CreateNotes from "./screens/createNotes"

const Stack = createNativeStackNavigator();

function App() {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setHideSplashScreen(true);
    }
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
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login" // Add Login screen to the stack
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
      <Stack.Screen
        name="createNotes"
        component={CreateNotes}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}

export default App;
