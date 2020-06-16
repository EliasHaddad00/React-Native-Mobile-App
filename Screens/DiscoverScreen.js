import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import Template from '../categories/Template'





function categoryScreen({ navigation }) {
  const [categories, setCategory]=useState([{id:1, title: "Virtual Reality", image:"https://img.icons8.com/fluent/48/000000/virtual-reality.png" },
{id:1, title: "robotics", image:"https://img.icons8.com/bubbles/50/000000/robot.png"},
{id:2, title: "Software", image:"https://img.icons8.com/dusk/64/000000/developer.png"} ,
{id:3, title: "Research", image:"https://img.icons8.com/dusk/64/000000/microscope.png"} ,
{id:4, title: "Electronics", image:"https://img.icons8.com/plasticine/100/000000/comparator.png"} ])
const [columnTwo, setColumnTwo]=useState([
{id:5, title: "Hydroponic", image:"https://img.icons8.com/bubbles/50/000000/hydropponics.png"} ,
{id:6, title: "Energy", image:"https://img.icons8.com/bubbles/50/000000/sustainable-energy.png"} ,
{id:8, title: "Machine Learning", image:"https://img.icons8.com/cute-clipart/64/000000/machine-learning.png"} ,
{id:9, title: "Mechanical", image:"https://img.icons8.com/ios-glyphs/30/000000/mechanistic-analysis.png"} ,
{id:9, title: "Biology",image:"https://img.icons8.com/bubbles/50/000000/biotech.png"} ])

  const [search, setSearch]=useState('');


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',  }}>
      <SearchBar
        lightTheme
        inputContainerStyle={{width:'100%'}}
        placeholder="Type Here..."
        value={search}
        onChangeText={value => setSearch(value)}
      />
      <View style={{flexDirection:'row',justifyContent:'flex-start',}}>
        <ScrollView style={styles.list}
            contentContainerStyle={styles.listContainer}
            categories={categories}
            horizontal={false}
            numColumns={2}
            >
            {categories.map(function(item){
              return (
                <View>
                  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details')}>
                    <Image style={styles.cardImage} source={{uri:item.image}}/>
                  </TouchableOpacity>

                  <View style={styles.cardHeader}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
          <ScrollView style={styles.list}
            contentContainerStyle={styles.listContainer}
            categories={categories}
            horizontal={false}
            numColumns={2}
            >
            {columnTwo.map(function(item){
              return (
                <View>
                  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details')}>
                    <Image style={styles.cardImage} source={{uri:item.image}}/>
                  </TouchableOpacity>

                  <View style={styles.cardHeader}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
    </View>
  );
}

function DetailsScreen() {
  return (
      <Template/>
  );
}

const Stack = createStackNavigator();

function DiscoverScreen() {
  return (
  
      <Stack.Navigator initialRouteName="discover">
        <Stack.Screen name="discover" component={categoryScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  
  );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:40,
    backgroundColor:'#f6f6f6',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: 'rgba(255,198,0,0.50)',
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:80,
    height:80,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 50,
    width: 50,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});     