import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Button from './widgets/Buttons.jsx';
import TextInputBox from './widgets/TextInputBox.jsx';

function SignUpPage({ navigation }) {

  // Route it to Registration Page
  // TODO: Change ONCLICK to route to another page
  const onPress = () => navigation.navigate("Home");
  const oldGuyOnPress = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.welcome_text}>Welcome Onboard !</Text>
        <Text style={styles.subtext}>Let's help you meet up your tasks</Text>
        {/* Form */}
        <View>
            <TextInputBox placeholder={"Full Name"} password={false} />
            <TextInputBox placeholder={"Email"} password={false} />
            <TextInputBox placeholder={"Password"} password={true} />
            <TextInputBox placeholder={"Confirm Password"} password={true} />
        </View>

        <View>
          <Button buttonText={"REGISTER"} onPress={onPress}/>
          <View style={styles.NewOldGuy}>
            <Text style={styles.black}>Already have an account?</Text>
            {/* TODO: Link to SignIN */}
            <TouchableOpacity onPress={oldGuyOnPress}>
              <Text style={styles.green}>Sign In</Text>
            </TouchableOpacity>
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
    color: 'background: rgba(0, 0, 0, 0.86)',
    fontWeight: 700,
    fontSize: 35,
  },
  subtext: {
    textAlign: 'center',
    color: 'rgba(0,0,0, 0.54)',
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

export default SignUpPage;