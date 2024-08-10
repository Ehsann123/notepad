import React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    contentFit="cover"
                    source={require("../assets/Logo.png")}
                />
                <Text style={styles.logoText}>Ehsan Qureshi</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>SIGN IN</Text>
            <Text style={styles.subtitle}>Sign in with your email address</Text>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    contentFit="cover"
                    source={require("../assets/email.svg")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Yourname@gmail.com"
                    placeholderTextColor="#B0B0B0"
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    contentFit="cover"
                    source={require("../assets/password.svg")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#B0B0B0"
                    secureTextEntry
                />
            </View>

            {/* Forgot Password */}
            <Pressable style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                <Text style={styles.resetText}> Click Here to Reset</Text>
            </Pressable>

            {/* Sign In Button */}
            <Pressable style={styles.signInButton} onPress={() => { }}>
                {/* <LinearGradient
          style={styles.gradient}
          colors={["#17942b", "#35562a"]}
        /> */}
                <Text style={styles.signInText}>Sign In</Text>
            </Pressable>

            {/* Face Unlock */}
            <Pressable style={styles.faceUnlockButton} onPress={() => { }}>
                <Text style={styles.faceUnlockText}>Face Unlock</Text>
            </Pressable>

            {/* Sign Up Link */}
            <Text style={styles.signUpText}>
                DONT HAVE AN ACCOUNT?
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpLink}> SIGN UP</Text>
                </Pressable>
            </Text>

            {/* Footer */}
            <Text style={styles.footerText}>Note Pad created by Ehsan</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 60,
    },
    logo: {
        width: 60,
        height: 60,
    },
    logoText: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 10,
    },
    title: {
        fontSize: 36,
        color: "#FFFFFF",
        fontWeight: "700",
        textAlign: "left",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#FFFFFF",
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1C1C1C",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 16,
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 30,
    },
    forgotPasswordText: {
        color: "#B0B0B0",
        fontSize: 14,
    },
    resetText: {
        color: "#9d5ce9",
        fontSize: 14,
        marginLeft: 5,
    },
    signInButton: {
        height: 50,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    signInText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        lineHeight: 50,
    },
    faceUnlockButton: {
        height: 50,
        borderWidth: 2,
        borderColor: "#17942b",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    faceUnlockText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
    },
    signUpText: {
        color: "#B0B0B0",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 40,
    },
    signUpLink: {
        color: "#FFFFFF",
        fontWeight: "700",
    },
    footerText: {
        color: "#60438c",
        fontSize: 12,
        textAlign: "center",
    },
});

export default Login;
