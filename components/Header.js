import * as React from 'react';
import { Button, Text, Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BaseApp from './BaseApp'
import Messages from './Messages'

const Tab = createMaterialTopTabNavigator();

function Header() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
          title:'hello',
          activeTintColor: '#01AD9A',
          inactiveTintColor: 'gray',
        }}
        
      >
      <Tab.Screen name="Hatch" component={BaseApp}  />
      <Tab.Screen name="Message" component={Messages} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:20
  },
  headerBox:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height: 48,
    borderWidth:.5,
    borderColor:"#000000",
    borderRadius:5,
    paddingTop:10
  },
  hatchText:{
    fontFamily: 'Rockwell-Regular',
    fontSize: 30,
    color: '#000000'
  }
})