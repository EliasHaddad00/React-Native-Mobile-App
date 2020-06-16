import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Feather';

export default function PostScreen({navigation}) {
  const [image, setImage] = useState('file:///var/mobile/Containers/Data/Application/A552C175-D2A7-4F50-96DA-BE4456BC98DC/Library/Caches/ExponentExperienceData/%2540anonymous%252Fsnack-37d7717d-f456-44e8-9280-5066a14543ea-5b17bc5a-1553-47cb-b2e7-ff7ddbdbe8a4/ImagePicker/E7876477-8749-4349-9B13-A300D775C791.jpg');
  const [description, setDiscription]=useState('');
  const [topic, setTopic]=useState('');
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
        setImage(result.uri);
        console.log(image)
      }
      
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Share</Text>
      <View style={styles.topicContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Project Topic"
          placeholderTextColor="#abbabb"
          topic={topic}
          onChangeText={topic => setTopic(topic)}
        />
      </View>
      <View style={styles.DescriptionContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Project Description"
          placeholderTextColor="#abbabb"
          description={description}
          onChangeText={description => setDiscription(description)}
        />
      </View>
      
      <View style={styles.iconBox}>
        <Icon
          name="camera"
          size={25}
          color="white"
          onPress={pickImage}
        />
        <Text style={{color:'white'}}>Select Image</Text>
      </View>
      <View style={styles.imageSelection}>
        {image && <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />}
      </View>
      <View style={{hieght:20, width:60, backgroundColor:'#01AD9A', borderRadius:10, marginTop:5}}>
        <Button
          title="Post"
          color='white'
          onPress={() => {
            setImage(null)
            setTopic('')
            setDiscription('')
            navigation.navigate('Home', {
              uri: image,
              description: description,
              topic: topic,
              name: 'Elias Haddad',
              key: false
            });
          }}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,198,0,0.50)'
  },
  imageSelection:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    height:253,
    width:253,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'#C7C7C7'
  },
  DescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom:15,
    width:250,
    height:100,
    borderRadius:10,
    backgroundColor:'white'
  },
  topicContainer:{
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth:1,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom:10,
    width:250,
    height:35,
    backgroundColor:'white'
  },
  iconBox:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width: 125,
    height:35,
    borderRadius:10,
    marginBottom:6,
    backgroundColor:'#01AD9A'
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%',
  },
  title: {
    flex:1,
    height: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop:10,
    minHeight: '3%',
  },
})
