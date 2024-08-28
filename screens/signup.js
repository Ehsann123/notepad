import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, GlobalStyles } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.signUp}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/Logo.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, GlobalStyles.fontPoppinsBold, GlobalStyles.colorWhite]}>Ehsan</Text>
          <Text style={[styles.subtitle, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}>
            Qureshi
          </Text>
        </View>
      </View>

      <Text style={[styles.mainTitle, GlobalStyles.fontPoppinsBold, GlobalStyles.colorWhite]}>
        SIGN UP
      </Text>

      <Text style={[styles.subtitle, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}>
        Sign up with email address
      </Text>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/email.svg")}
        />
        <TextInput
          style={[styles.inputText, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}
          placeholder="Yourname@gmail.com"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/password.svg")}
        />
        <TextInput
          style={[styles.inputText, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}
          placeholder="your password"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Pressable
        style={styles.signupButton}
        onPress={() => navigation.navigate('faceRegister')} // Navigate to the Login screen
      >
        <Text style={[styles.signupButtonText, GlobalStyles.fontPoppinsMedium, GlobalStyles.colorWhite]}>
          Sign up
        </Text>
      </Pressable>


      <Pressable
        style={styles.signInLink}
        onPress={() => navigation.navigate('Login')} // Navigate to the Login screen
      >
        <Text style={[styles.subtitle, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}>
          Already Have An Account? <Text style={styles.signInText}>SIGN IN</Text>
        </Text>
      </Pressable>

      <Text style={[styles.footerText, GlobalStyles.fontPoppinsRegular, GlobalStyles.colorWhite]}>
        Note pad created by Ehsan
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: "#000",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logoIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  titleContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 12,
  },
  mainTitle: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "#17942b",
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  signupButtonText: {
    fontSize: 18,
  },
  signInLink: {
    alignItems: "center",
    marginBottom: 30,
  },
  signInText: {
    color: "#9d5ce9",
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
  },
});

export default SignUp;
