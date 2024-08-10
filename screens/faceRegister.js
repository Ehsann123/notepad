import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
const FaceRegister = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.faceRegister}>
        <View style={styles.continueWith}>
          <Text style={[styles.notePadCreated, styles.makeSureYourTypo]}>
            note pad created by ehsan
          </Text>
        </View>
        <Text style={[styles.title, styles.titleFlexBox]}>Register Face</Text>
        <View style={[styles.logo, styles.logoLayout]}>
          <View style={[styles.titleParent, styles.logoLayout]}>
            <Text style={[styles.title1, styles.titleClr]}>Ehsan</Text>
            <Text style={[styles.title2, styles.titleClr]}>Qureshi</Text>
          </View>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
        </View>
        <Image
          style={styles.hamburgerMenuIcon}
          contentFit="cover"
          source={require("../assets/hamburger-Menu.svg")}
        />
        <Text style={[styles.subtitle, styles.titleFlexBox]}>
          This app requires you to register your face
        </Text>
        <Image
          style={styles.faceRegisterChild}
          contentFit="cover"
          source={require("../assets/faceHolder.png")}
        />
        <Pressable
          style={[styles.signupButton, styles.signupLayout]}
          onPress={() => navigation.navigate('faceConfirm')}
        >
          {/* <LinearGradient
            style={[styles.signupButtonChild, styles.signupLayout]}
            locations={[0, 1]}
            colors={["#17942b", "#35562a"]}
          /> */}
          <Text style={[styles.confirm, styles.titleFlexBox]}>Confirm</Text>
        </Pressable>
        <View style={styles.terms}>
          <Text style={[styles.makeSureYour, styles.makeSureYourTypo]}>
            Make sure your face is in good light
          </Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    makeSureYourTypo: {
      textAlign: "left",
      fontWeight: "500",
      top: 0,
      position: "absolute",
    },
    titleFlexBox: {
      textAlign: "center",
      color: Color.colorWhite,
      position: "absolute",
    },
    logoLayout: {
      height: 31,
      position: "absolute",
    },
    titleClr: {
      color: Color.colorWhite,
      textAlign: "left",
      position: "absolute",
    },
    signupLayout: {
      height: 50,
      width: 253,
      position: "absolute",
    },
    notePadCreated: {
      fontSize: 11,
      color: "#60438c",
      fontFamily: FontFamily.poppinsMedium,
      textTransform: "uppercase",
      left: 0,
    },
    continueWith: {
      top: 897,
      left: 127,
      width: 161,
      height: 17,
      position: "absolute",
    },
    title: {
      marginLeft: -100,
      top: 173,
      fontSize: 32,
      fontFamily: FontFamily.helvetica,
      left: "50%",
    },
    title1: {
      fontSize: 17,
      fontWeight: "700",
      fontFamily: FontFamily.poppinsBold,
      left: 0,
      top: 0,
    },
    title2: {
      left: 26,
      fontSize: 7,
      letterSpacing: 4.2,
      fontFamily: FontFamily.poppinsRegular,
      top: 20,
      textTransform: "uppercase",
    },
    titleParent: {
      left: 29,
      width: 80,
      top: 25,
    },
    logoIcon: {
      top: 25,
      width: 17,
      height: 20,
      left: 0,
      position: "static",
    },
    logo: {
      top: 25,
      left: 28,
      width: 109,
      top: 20,
    },
    hamburgerMenuIcon: {
      top: 50,
      left: 290,
      width: 22,
      height: 10,
      position: "relative",
    },
    subtitle: {
      marginLeft: -108,
      top: 265,
      fontSize: 12,
      fontFamily: FontFamily.sFProDisplay,
      left: "50%",
      fontWeight: "500",
      textAlign: "center",
    },
    faceRegisterChild: {
      marginLeft: -106,
      top: 335,
      width: 212,
      height: 262,
      left: "50%",
      position: "absolute",
    },
    signupButtonChild: {
      borderRadius: 15,
      backgroundColor: "transparent",
      left: 0,
      top: 0,
    },
    confirm: {
      top: 12,
      fontSize: 18,
      left: 55,
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      textAlign: "left",
    },
    signupButton: {
      top: 654,
      left: 89,
    },
    makeSureYour: {
      marginLeft: -80.5,
      fontSize: 11,
      left: 65,
      fontFamily: FontFamily.sFProText,
      color: "#b6b6b6",
      left: "50%",
    },
    terms: {
      marginLeft: -85,
      top: 741,
      width: 171,
      height: 12,
      left: "50%",
      position: "absolute",
    },
    faceRegister: {
      backgroundColor: "#000",
      flex: 1,
      width: "100%",
      height: 932,
      overflow: "hidden",
    },
  });
  
  export default FaceRegister;