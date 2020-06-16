import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import * as SecureStore from 'expo-secure-store';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, token: null };
  }

  componentWillMount() {
    setTimeout(() => {
      this.checkForToken();
    }, 2000);
  }

  //Check Async Storage if token is available
  //If it is available set loading state to false

  async checkForToken() {
    let token = await SecureStore.getItemAsync('token_');
    console.log(token);
    this.setState({
      token: token,
      loading: false,
    });
  }

  //Write token to secure storage.
  async saveTokenToSecureStorage(token) {
    SecureStore.setItemAsync('token_', token);
    this.setState({
      token: token,
    });
  }

  render() {
    if (this.state.loading === true) {
      return <LoadingScreen />;
    } else if (this.state.token === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to Hatch</Text>
          <View style={styles.facebookButton}>
            <Button title="LogIn With Facebook" onPress={() => this.logIn()} />
          </View>
        </View>
      );
    } else {
      return <Header />;
    }
  }

  async logIn() {
    try {
      //Seed documentation on course site at mobileappdev.teachable.com
      //For default user names and passwords.
      await Facebook.initializeAsync('1537986353035408');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        this.saveTokenToSecureStorage(token);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01AD9A',
  },
  facebookButton: {
    width: 220,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  welcomeText: {
    fontFamily: 'Rockwell-Regular',
    fontSize: 35,
    color: '#000000',
    letterSpacing: 0,
  },
});
