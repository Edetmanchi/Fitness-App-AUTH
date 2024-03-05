
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { CheckBox, Icon, SocialIcon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryBtn from '../components/PrimaryBtn';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LogIn() {
  const [text, setText] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const toggleCheckbox = () => setChecked(!checked);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ba1638', '#2c1737']}>
        <SafeAreaView>
          <KeyboardAvoidingView>
            <View>
              {/* page header */}
              <View style={styles.container1}>
                <View>
                  <Text style={styles.headerText1}>Hello</Text>
                  <Text style={styles.headerText2}>Sign In</Text>
                </View>
              </View>
              {/* main container */}
              <View style={styles.container2}>
                <View style={styles.view2}>
                  <View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputFieldContainer}>
                      <TextInput
                        style={styles.inputField}
                        keyboardType='email-address'
                        placeholder='anything@gmail.com'
                        placeholderTextColor="#52545c"
                        value={text}
                        onChangeText={(text) => setText(text)}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputFieldContainer}>
                      <TextInput
                        style={styles.inputField}
                        keyboardType='numeric'
                        placeholder='password'
                        placeholderTextColor="#52545c"
                        secureTextEntry={secureEntry}
                        value={password}
                        // onChangeText={(text) => setPassword(text)}
                        onChangeText={(text: string) => setPassword(text)}
                      />
                      <Ionicons name={secureEntry ? 'eye' : 'eye-off'} size={24} color="grey" onPress={toggleSecureEntry} />
                    </View>
                  </View>
                  <View style={styles.view3}>
                    <View style={styles.checkbox}>
                      <CheckBox
                        size={23}
                        checked={checked}
                        checkedColor={checked ? "#390d7c" : "black"}
                        onPress={toggleCheckbox}
                      />
                      <Text style={{ color: checked ? "grey" : "grey" }}>
                        {checked
                          ? "Password saved"
                          : "Remember me"}
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                  </View>

                </View>

                <View>
                  <PrimaryBtn label="SIGN IN" />
                </View>
                <View style={styles.view5}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
  )
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
    paddingVertical: 6,
    color: '#52545c'
  },
  inputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  inputField: {
    width: 240,
    height: 47,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxText: {
    color: 'grey'
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
  view6: {

  },
});








