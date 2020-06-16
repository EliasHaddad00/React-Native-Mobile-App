import React, { useState, useEffect } from 'react';
import {View, StyleSheet, ScrollView ,TouchableOpacity, Text, SafeAreaView} from 'react-native';
import NewCard from '../components/NewCard';
import SwipeButton from 'rn-swipe-button';



export default function FeedScreen({route}) {
  const [feed, setFeed] = useState([]);
 

 
  let addToFeed = () => {
    setFeed([...feed, { 
      uri: route.params.uri, 
      description: route.params.description, 
      topic: route.params.topic, 
      name: route.params.name,
      key: route.params.key
     }]);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.updateButton}>
        <SafeAreaView>
          <View style={{marginTop:-1}}>
            
            <SwipeButton
              disabled={false}
              swipeSuccessThreshold={10}
              height={30}
              width={200}
              title="Update feed"
            
              onSwipeSuccess={() =>{addToFeed()}}
              //After the completion of swipe
              railFillBackgroundColor="#01AD9A" 
              railFillBorderColor="black" 
              thumbIconBackgroundColor="white" 
              thumbIconBorderColor="#ed9aff" 
              railBackgroundColor="#01AD9A" 
              railBorderColor="#01AD9A" 
              
            />
          </View>
        </SafeAreaView>
      </View>
      <ScrollView style={{ width: '100%'}}>
          {feed.map(function(item){
                return(
                <NewCard
                  uri={item.uri}
                  description={item.description}
                  topic={item.topic}
                  name={item.name}
                />
                ) 
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
    backgroundColor: 'rgba(255,198,0,0.50)',
  },
  updateButton:{
    flexDirection:'column',
    justifyContent:'center', 
    alignItems:'center',
  }
})