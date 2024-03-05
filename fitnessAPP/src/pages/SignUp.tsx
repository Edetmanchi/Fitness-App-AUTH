import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { CheckBox, SocialIcon } from '@rneui/themed';
// import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryBtn from '../components/PrimaryBtn';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function LogIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };

  const dataList = [
    { type: 'facebook' },
    { type: 'twitter' },
    { type: 'apple' },
  ];

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ba1638', '#2c1737']}>
    <SafeAreaView style={{backgroundColor:""}}>
      {/* <KeyboardAvoidingView> */}
        <View style={styles.container1}>
          <Text style={styles.headerText1}>Create</Text>
          <Text style={styles.headerText2}>Your Account</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.view2}>
            <View>
              <Text style={styles.label}>Name</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  keyboardType='default'
                  placeholder='Usman Chris'
                  placeholderTextColor="#52545c"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  keyboardType='email-address'
                  placeholder='anything@gmail.com'
                  placeholderTextColor="#52545c"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  keyboardType='default'
                  placeholder='password'
                  placeholderTextColor="#52545c"
                  secureTextEntry={secureEntry}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <Ionicons name={secureEntry ? 'eye' : 'eye-off'} size={24} color="grey" onPress={toggleSecureEntry} />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Retype Password</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  keyboardType='default'
                  placeholder='password'
                  placeholderTextColor="#52545c"
                  secureTextEntry={secureEntry}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <Ionicons name={secureEntry ? 'eye' : 'eye-off'} size={24} color="grey" onPress={toggleSecureEntry} />
              </View>
            </View>
          </View>
          <View>
            <PrimaryBtn label="SIGN UP" />
          </View>
          <View style={styles.view5}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
        </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container1: {
        height: '25%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30
      },
      headerText1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
      },
      headerText2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,    
    },
    container2: {
        height: '75%',
        paddingHorizontal: 24,
        gap: 10,
        justifyContent: 'space-evenly',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white'
    },
      view2: {
        gap: 18
    },
  label: {
    paddingVertical: 4,
    color: '#ba1638',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#DEDEDE',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },

  inputField: {
    width: 240,
    height: 44,
  },
  forgotPasswordText: {
    // color: '#ff7622',
    color:'black',
    fontWeight: 'bold'
  },
  view5: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 15
  },
});
