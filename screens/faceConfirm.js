import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles"; // Assuming you have GlobalStyles for consistency

const FaceConfirm = () => {
  const navigation = useNavigation(); // Hook to access navigation

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.notePadCreated}>Note pad created by Ehsan</Text>
      </View>
      
      <View style={styles.logoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.firstName}>Ehsan</Text>
          <Text style={styles.lastName}>Qureshi</Text>
        </View>
        <Image style={styles.logoIcon} source={require("../assets/Logo.png")} />
      </View>

      <Image
        style={styles.hamburgerMenuIcon}
        source={require("../assets/hamburger-Menu.svg")}
      />

      <Text style={styles.title}>Face Registered!</Text>

      <Image
        style={styles.tickIcon}
        source={require("../assets/tickCircle.svg")}
      />

      <Pressable
        style={styles.continueButton}
        onPress={() => navigation.navigate("createNotes")} 
      >
        
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  notePadCreated: {
    fontSize: 11,
    color: "#60438c",
    fontFamily: "Poppins-Medium",
    textTransform: "uppercase",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    marginRight: 10,
  },
  firstName: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  lastName: {
    fontSize: 7,
    letterSpacing: 4.2,
    fontFamily: "Poppins-Regular",
    color: "#fff",
    textTransform: "uppercase",
  },
  logoIcon: {
    width: 20,
    height: 20,
  },
  hamburgerMenuIcon: {
    position: "absolute",
    top: 30,
    right: 20,
    width: 22,
    height: 10,
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins-Regular", // Adjust according to your font settings
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  tickIcon: {
    width: 135,
    height: 135,
    marginBottom: 50,
  },
  continueButton: {
    width: 253,
    height: 50,
    borderRadius: 15,
    overflow: "hidden",
  },
  continueButtonBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "#fff",
    textAlign: "center",
    lineHeight: 50,
  },
});

export default FaceConfirm;
