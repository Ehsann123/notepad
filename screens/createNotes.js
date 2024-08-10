import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";// Assuming you have GlobalStyles for consistency

const CreateNotes = () => {
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

      <Text style={styles.title}>Write Your Thoughts</Text>

      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Note 1</Text>
        <Text style={styles.noteContent}>
          Today I created a MERN stack application and...
        </Text>
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Note 2</Text>
        <Text style={styles.noteContent}>
          Today I created a MERN stack application and...
        </Text>
      </View>

      <Image
        style={styles.imageIcon}
        source={require("../assets/Group-1435.svg")}
      />
      <Image
        style={styles.imageIcon}
        source={require("../assets/Group-1435.svg")}
      />
      <Image
        style={styles.vectorIcon}
        source={require("../assets/plus.svg")}
      />
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
      position: "absolute",
      top: 25,
      left: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    logoIcon: {
      width: 17,
      height: 20,
    },
    nameContainer: {
      marginLeft: 10,
    },
    firstName: {
      fontSize: 17,
      fontWeight: "700",
      fontFamily: FontFamily.poppinsBold,
      color: "#fff",
    },
    lastName: {
      fontSize: 7,
      letterSpacing: 4.2,
      fontFamily: FontFamily.poppinsRegular,
      color: "#fff",
      textTransform: "uppercase",
    },
    hamburgerMenuIcon: {
      position: "absolute",
      top: 30,
      right: 20,
      width: 22,
      height: 10,
    },
    title: {
      fontSize: 22,
      fontFamily: FontFamily.sFProText,
      color: "#fff",
      textAlign: "center",
      marginVertical: 30,
    },
    noteContainer: {
      width: "100%",
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      borderColor: "#606c38",
      borderWidth: 1,
      backgroundColor: "#1c1c1c",
    },
    noteTitle: {
      fontSize: 16,
      fontFamily: FontFamily.poppinsMedium,
      color: "#fff",
      marginBottom: 10,
    },
    noteContent: {
      fontSize: 14,
      fontFamily: FontFamily.poppinsRegular,
      color: "#dcdcdc",
    },
    vectorIcon: {
      position: "absolute",
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
    },
  });

export default CreateNotes;
