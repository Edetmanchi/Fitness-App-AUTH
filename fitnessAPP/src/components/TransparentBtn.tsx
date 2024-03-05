import { View, Text , StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StackNavigationProp } from '@react-navigation/stack';

interface TransparentBtnProps {
  onPress: () => void;
  navigation: StackNavigationProp<RootStackParamList>;
  label: string;
}
const TransparentBtn: React.FC<TransparentBtnProps> = ({ onPress, navigation, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
        borderWidth: 2,
        borderBlockColor: 'grey'


    },
    btnText:{
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    }
})




