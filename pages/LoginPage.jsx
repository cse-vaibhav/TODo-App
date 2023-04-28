import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Button from './widgets/Buttons.jsx';
import TextInputBox from './widgets/TextInputBox.jsx';

const main_image = require('../resources/image-loginpage.png')

const LoginPage = () => {

  // Route it to Registration Page
  // TODO: Change ONCLICK to route to another page
  const onPress = () => console.log("This will go to HomePage");

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.welcome_text}>Welcome Back !</Text>
        <Image 
        style={styles.image} 
        source={ main_image } />

        {/* Form */}
        <View>
          <TextInputBox placeholder={"Email"} password={false} />
          <View>
            <TextInputBox placeholder={"Password"} password={true} />
            <Text style={styles.fgpwd}>Forgot Password ?</Text>
          </View>
        </View>

        <View>
          <Button buttonText={"LOG IN"} onPress={onPress}/>
          <View style={styles.NewOldGuy}>
            <Text style={styles.black}>Don't have an account ?</Text>
            {/* TODO: Link to SignUp */}
            <Text style={styles.green}>Sign Up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#9CD0C9',
    paddingTop: '20%',
    paddingHorizontal: '10%',
  },
  main: {
    flex: 1,
    rowGap: 40,
  },
  welcome_text: {
    left: '8%',
    color: 'background: rgba(0, 0, 0, 0.86)',
    fontWeight: 700,
    fontSize: 48,
  },
  image: {
    right: '4%',
    width: 230,
    height: 200,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  fgpwd: {
    textAlign: 'center',
    color: 'rgba(24, 155, 145, 1)',
    fontSize: 17,
    fontWeight: 500
  },
  NewOldGuy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '3%',
    gap: 4,
  },
  black: {
    color: '#000000',
    fontWeight: 600
  },
  green: {
    color: 'rgba(24, 155, 145, 1)',
    fontWeight: 600
  }
});

export default LoginPage;