//This is an example of Splash Screen with Zoom Effect Animation///
import React from 'react';
//import react in our code.

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
//import all the components we are going to use

export default class App extends React.Component {
  state = {
    height: new Animated.Value(6000), // Initial value for opacity: 0
    width: new Animated.Value(3600), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 100, // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      }
    ).start(); // Starts the animation
   
  }

  render() {
    let { height } = this.state;
    let { width } = this.state;

    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={require("../assets/splash.png")}
          style={{
            width: width,
            height: height,
            position: 'absolute',
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 48,
            backgroundColor: 'rgba(11, 56, 82, 0.3)',
          }}>
         
          <Text style={styles.welcomeText}>
            Welcome to Hatch
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#01AD9A',
  },
  welcomeText: {
    fontFamily: 'Rockwell-Regular',
    fontSize: 35,
    color: '#000000',
    letterSpacing: 0,
  }
});
