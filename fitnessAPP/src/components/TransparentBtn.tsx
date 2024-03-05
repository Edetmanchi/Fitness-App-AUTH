import { View, Text , StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const TransparentBtn = ({label}) => {
  return (
    // <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ba1638', '#2c1737']} style={styles.container}>
    // </LinearGradient>
    <TouchableOpacity style={styles.container}>
        <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TransparentBtn
const styles = StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        paddingVertical: 14,
        borderRadius: 32,
        borderWidth: 1,
        borderBlockColor: 'grey'


    },
    btnText:{
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    }
})