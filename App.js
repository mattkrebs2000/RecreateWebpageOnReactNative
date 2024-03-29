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
  contentContainerStyle,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

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
          <View style={styles.linkcenter}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            ><View style={styles.linkcenter2}>
              <Text style={styles.links}>Home</Text>
              </View>
              <View style={styles.linkcenter2}>
              <Text style={styles.links}>About</Text>
              </View>
              <View style={styles.linkcenter2}>
              <Text style={styles.links}>Products</Text>
              </View>
              <View style={styles.linkcenter2}>
              <Text style={styles.links}>Services</Text>
              </View>
              <View style={styles.linkcenter2}>
              <Text style={styles.links}>Design</Text>
              </View>
              <View style={styles.linkcenter2}>
              <Text style={styles.links}>Contact</Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.text}>
        <View style={styles.innertext}>
          <Text style={styles.heading}>
            You may use this template in any manner you like. All I ask is that
            you leave the link back to my site at the bottom of the page.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
          <Text style={styles.heading2}>Template Notes</Text>
          <Text style={styles.text2}>
            The main image can be changed by either replacing the current image
            with another one of the same size (900x402), or using a new one of
            what ever dimensions you'd like. If you choose the latter, you must
            open up style.css and change the dimensions of #mainpic, as well as
            the file name if that is different. If you would like to move the
            heading around in the above image, find "#mainpic h1" in style.css
            and modify it's "left" and "top" properties, this is also true for
            the h2 tag.
          </Text>
          <Text style={styles.heading2}>More Information</Text>
          <Text style={styles.text2}>
            I decided to leave the content portion open for the templates users
            to do as they wish with a blank canvas. I don't like to restrict my
            users too much, and for this reason I leave the defining of any
            content related styles to you.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e4297",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  image: {
    width: "100%",
    marginLeft: "5@s",
    marginRight: "5@s",
    height: "100%",
    resizeMode: "stretch",
             
  },
  imagecontainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.4,
    width: "90%",
    backgroundColor: "green",
    marginTop: 0,
  },
  image2: {
    width: "100%",
    marginLeft: "5@s",
    marginRight: "5@s",
    height: "100%",
  },
  imagecontainer2: {
    alignItems: "center",
    flex: 0.1,
    width: "90%",
  },
  text: {
    flex: 0.8,
    width: "90%",
    backgroundColor: "white",
  },
  innertext: {
    margin: "10@s",
  },
  links: {
    color: "white",
    fontWeight: "bold",
    marginRight: "25@s",
    marginLeft: "15@s",
    fontSize: "10@s",
  },
  toptext: {
    color: "white",
    fontWeight: "bold",
    marginLeft: "45%",
    marginTop: "10%",
    fontSize: "12@s",
  },

  heading2: {
    color: "black",
    fontWeight: "700",
    fontSize: "18@s",
    marginTop: "20@s",
  },

  heading: {
    color: "black",
    fontWeight: "bold",

    marginBottom: "5@s",
    fontSize: "18@s",
  },
  text2: {
    color: "black",
    fontSize: "15@s",
  },

  // linkcenter: {
  //   marginVertical: "4.5@s",
  //   height: "100%",
  //   justifyContent: "center",
  // },

  linkcenter2: {
    height: "100%",
    justifyContent: "center",
  },

});
