import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Button, TouchableOpacityComponent} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';


export default function NewCard(props,{nag}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image
                style={styles.image}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <View>
                    <Text>{props.name}</Text>
                </View>
              </View>
                <TouchableOpacity>
                  <Icon
                    name="eye"
                    size={25}
                    color="#01AD9A"
                  />
                </TouchableOpacity>
                  
                 
            </View>
            <View style={styles.imageContainer}>
                {props.uri && <Image source={{ uri: props.uri }} style={{ width: '100%', height: '90%',justifyContent:'center' }} />}
            </View>
            <View style={styles.descriptionContainer}>
              <Text>Topic: {props.topic}</Text>
              <Text>Description: {props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    width: 374,
    height: 500,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginBottom:5,
    marginTop:5,
    borderRadius:5,
  },
  image: {
    width: 50,
    height:50,
    margin: 10,
    borderRadius:50
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight:10,
    width: '100%',
    height: 50,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    width: "99%",
  },
  textSection:{
    opacity: 0.5,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#000000',
    letterSpacing: 0
  },
  descriptionContainer:{
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'baseline',
    borderColor: 'black',
    borderWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
    height:100,
    width:'98%',
    borderRadius:5,
  }
});