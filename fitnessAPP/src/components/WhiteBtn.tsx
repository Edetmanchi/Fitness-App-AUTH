import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

interface WhiteBtnProps {
  onPress: () => void;
  navigation: StackNavigationProp<RootStackParamList>;
  label: string;
}

const WhiteBtn:React.FC<WhiteBtnProps> = ({onPress, navigation, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default WhiteBtn
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
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