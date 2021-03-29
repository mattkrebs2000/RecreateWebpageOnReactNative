import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {

  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
  };
  const header = {
    uri: "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png"
  }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.imagecontainer}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
    </View>
    <View style={styles.imagecontainer2}>
      <ImageBackground source={header} style={styles.image2}></ImageBackground>
    </View>
    <Button
    onPress={() => navigation.toggleDrawer()}
    title="Go to notifications"
  />
    <Text style={styles.text}>
      Open up App.js to start working on your app!
    </Text>
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.toggleDrawer()} title="Go back home" />
    </View>
  );
}


export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />

  
  </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e4297",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    height: "100%",
  },
  imagecontainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.2,
    width: "90%",
    backgroundColor: "green",
    marginTop:0,
  },
  image2: {
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    height: "100%",
  },
  imagecontainer2: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.2,
    width: "90%",
    backgroundColor: "green",
    marginTop:0,
  },
  text: {
    flex: 0.5,
    width: "100%",
  },
});
