import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Template from '../categories/Template'

export default function FavoritesScreen() {
  return (
    <Template/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
})