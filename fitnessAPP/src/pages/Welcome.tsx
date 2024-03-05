import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import TransparentBtn from '../components/TransparentBtn'
import WhiteBtn from '../components/WhiteBtn'
const Welcome = () => {
    return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ba1638', '#2c1737']}>
        <SafeAreaView style={{height: "100%"}}>
            <View>
                <Image source={require("../img/dumbbell.png") } style={styles.img}/>
                <Text>FITNESS</Text>
            </View>
            
            <View>
                <Text>WELCOME BACK</Text>
                <TransparentBtn label="SIGN IN"/>
                <WhiteBtn label="SIGN UP"/>
            </View>
            <View>
                <Text>Login with Social Media</Text>
                <View>
                    <Entypo name="instagram" size={24} color="#971c3b" />
                    <Entypo name="twitter" size={24} color="#971c3b" />
                    <FontAwesome5 name="facebook-f" size={24} color="#971c3b" />
                </View>
            </View>
        
        </SafeAreaView>
    </LinearGradient>
    )
}
export default Welcome
const styles = StyleSheet.create(
    {
        
    img:{
        height: 70,
        width: 150,
    }
    }
)
