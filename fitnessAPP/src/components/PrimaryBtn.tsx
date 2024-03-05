import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {handleSubmit} from '../pages/SignUp'

interface PrimaryBtnProps {
  label: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({label}) => {
  return (
    <LinearGradient 
    start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ba1638', '#2c1737']} 
    style={styles.container}
    >
        <Text style={styles.btnText}>{label}</Text>
    </LinearGradient>
  )
}

export default PrimaryBtn
const styles = StyleSheet.create({
    container:{
        backgroundColor:"",
        paddingVertical: 14,
        borderRadius: 32,


    },
    btnText:{
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    }
})