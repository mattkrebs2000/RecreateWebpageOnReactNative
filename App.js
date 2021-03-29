import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
  };
  const header = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageBackground source={image} style={styles.image}>
          <View>
            <Text style={styles.toptext}>
              NightBeach {"\n"}A template by Bryant Smith
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.imagecontainer2}>
        <ImageBackground source={header} style={styles.image2}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.links}>Home</Text>
            <Text style={styles.links}>About</Text>
            <Text style={styles.links}>Products</Text>
            <Text style={styles.links}>Services</Text>
            <Text style={styles.links}>Design</Text>
            <Text style={styles.links}>Contact</Text>
          </ScrollView>
        </ImageBackground>
      </View>
      <ScrollView style={styles.text}>
        <View style={styles.innertext}>
        <Text style={styles.heading}>
        You may use this template in any manner you like. All I ask is that you leave the link back to my site at the bottom of the page.
        </Text>
        <Text style={styles.heading2}>
       Template Notes
        </Text>
        <Text style={styles.text2}>
        The main image can be changed by either replacing the current image with another one of the same size (900x402), or using a new one of what ever dimensions you'd like. If you choose the latter, you must open up style.css and change the dimensions of #mainpic, as well as the file name if that is different. If you would like to move the heading around in the above image, find "#mainpic h1" in style.css and modify it's "left" and "top" properties, this is also true for the h2 tag.
        </Text>
        <Text style={styles.heading2}>
       More Information
         </Text>
         <Text style={styles.text2}>
         I decided to leave the content portion open for the templates users to do as they wish with a blank canvas. I don't like to restrict my users too much, and for this reason I leave the defining of any content related styles to you.
         </Text>
         <Text style={styles.heading2}>
         Template Notes
          </Text>
          <Text style={styles.text2}>
          The main image can be changed by either replacing the current image with another one of the same size (900x402), or using a new one of what ever dimensions you'd like. If you choose the latter, you must open up style.css and change the dimensions of #mainpic, as well as the file name if that is different. If you would like to move the heading around in the above image, find "#mainpic h1" in style.css and modify it's "left" and "top" properties, this is also true for the h2 tag.
          </Text>
          <Text style={styles.heading2}>
         More Information
           </Text>
           <Text style={styles.text2}>
           I decided to leave the content portion open for the templates users to do as they wish with a blank canvas. I don't like to restrict my users too much, and for this reason I leave the defining of any content related styles to you.
           </Text>
          
        
        
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e4297",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
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
    marginTop: 0,
  },
  image2: {
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagecontainer2: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.08,
    width: "90%",
    backgroundColor: "green",
    marginTop: 0,
  },
  text: {
    flex: .8,
    width: "90%",
    backgroundColor: "white",
  },
  innertext: {
margin: 10,
  },
  links: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 25,
    marginLeft: 15,
  },
  toptext: {
    color: "white",
    fontWeight: "bold",
    marginLeft: "45%",
    marginTop: "10%",
  },

 heading2: {
    color: "black",
    fontWeight:"700",
   fontSize: 18,
    marginTop: 20,
  
  },

  heading: {
    color: "black",
    fontWeight: "bold",
   
   marginBottom: 5,
   fontSize: 18,
  },
  text2: {
    color: "black",
   fontSize: 15,
  },
});
