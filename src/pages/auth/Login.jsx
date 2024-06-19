import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from "react-native-web";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs6TCfs_JmvS5q7o7uek8Vj6ztLYwlfpk",
  authDomain: "gpcssi-website.firebaseapp.com",
  databaseURL: "https://gpcssi-website-default-rtdb.firebaseio.com",
  projectId: "gpcssi-website",
  storageBucket: "gpcssi-website.appspot.com",
  messagingSenderId: "112789278985",
  appId: "1:112789278985:web:778a5dfcc555bd5d6343d8",
  measurementId: "G-MRFXK4KRS9"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load custom fonts if any
    const loadFonts = async () => {
      // Simulate font loading
      setTimeout(() => {
        setFontsLoaded(true);
      }, 1000);
    };
    loadFonts();
  }, []);

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.profileObj.googleId
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = async (googleUser) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.credential.idToken,
          googleUser.credential.accessToken
        );

        try {
          const result = await firebase.auth().signInWithCredential(credential);
          if (result.additionalUserInfo.isNewUser) {
            await firebase.database().ref("/users/" + result.user.uid).set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              current_theme: "dark"
            });
          }
        } catch (error) {
          console.error("Error during sign in: ", error.message);
        }
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => onSignIn(tokenResponse),
    onError: error => console.error("Login failed: ", error),
  });

  if (!fontsLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appTitle}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.appIcon}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign in with Google"
          onPress={() => login()}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 15,
    borderColor: "white",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white"
  },
});

export default LoginScreen;
