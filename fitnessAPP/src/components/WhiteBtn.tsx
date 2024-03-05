import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const WhiteBtn = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default WhiteBtn
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingVertical: 14,
        borderRadius: 32,

    },
    btnText:{
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'black'
    }
})