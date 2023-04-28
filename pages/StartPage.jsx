import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Button from './widgets/Buttons.jsx'


const main_image = require('../resources/image-startpage.png')

const StartPage = ({ navigation }) => {

  // Route it to Registration Page
  // TODO: Change ONCLICK to route to another page
  const onPress = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageBox}>
          <Image 
          style={styles.image} 
          source={ main_image } />
        </View>

        <View>
          <Text style={styles.heading}>Get things done with TODo</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames lectus fermentum ultrices ipsum ornare id lorem vestibulum, congue. Quis nulla vel consectetur ultrices. Nulla est faucibus mollis faucibus sed libero amet. Facilisis ut arcu facilisis egestas iaculis nec sit. Donec adipiscing ac massa egestas.
          </Text>
        </View>

        <Button buttonText="Get Started" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#9CD0C9',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    rowGap: 40,
    marginTop: 140,
  },
  image: {
    left: '3%',
    width: 230,
    height: 200,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.76)',
    textAlign: 'center',
  },
  description: {
    marginVertical: 40,
    fontSize: 16,
    fontWeight: 400,
    paddingHorizontal: 30,
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

export default StartPage;