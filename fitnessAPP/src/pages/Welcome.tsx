import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import TransparentBtn from '../components/TransparentBtn'
import WhiteBtn from '../components/WhiteBtn'



const { height, width, fontScale, scale } = Dimensions.get("window");
type WelcomeProps = {
    navigation: NavigationProp<RootStackParamList, 'Welcome'>;
};
const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {

    const navigateToSignUp =()=>{
        navigation.navigate("SignUp")
    }
    const navigateToSignIn =()=>{
        navigation.navigate("SignIn")
    }
    
    return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ba1638', '#2c1737']}>
        <SafeAreaView style={styles.body}>
            <View style={styles.view1}>
                <Image source={require("../img/dumbbell.png") } style={styles.img}/>
                <Text style={styles.logoText}>FITNESS CLUB</Text>
            </View>
            
            <View style={styles.view2}>
                <Text style={styles.view2Text}>WELCOME BACK</Text>
                <TransparentBtn label="SIGN IN" onPress={navigateToSignIn}/>
                <WhiteBtn label="SIGN UP" onPress={navigateToSignUp}/>
            </View>
            <View style={styles.view3}>
                <Text style={styles.view3Text}>Login with Social Media</Text>
                <View style={styles.iconContainer}>
                    <Entypo style={styles.icon} name="instagram" size={22} color="#971c3b" />
                    <Fontisto name="twitter" style={styles.icon} size={22} color="#971c3b" />
                    <FontAwesome5 style={styles.ficon} name="facebook-f" size={25} color="#971c3b" />
                </View>
            </View>
        </SafeAreaView>
    </LinearGradient>
    )
}
export default Welcome
const styles = StyleSheet.create(
    {
        body:{
            height: "100%",
            gap: 30,
            justifyContent: "space-evenly",
            paddingHorizontal: 24,
        },
        view1:{
            alignItems: "center"
        },
        logoText:{
            color:"white",
            fontSize: 30,
            fontWeight:"bold",  
            paddingVertical: 10
        },
        img:{
            height: 50,
            width: 100,
            tintColor: "white"
        },
        view2:{
            gap: 25,
        },
        view2Text:{
            color:"white",
            fontSize: 20,
            textAlign:"center" 
        },
        view3:{
            alignItems:"center",
            gap: 20
        },
        view3Text:{
            color:"white",
            fontSize: 17,
            
        },
        iconContainer:{
            display: 'flex',
            flexDirection:"row",
            gap: 10
        },
        icon:{
            backgroundColor:"white",
            // paddingHorizontal: ,
            padding: 6,
            paddingVertical: 2,
            borderRadius: 50,
            paddingTop: 3,
            

        },
        ficon:{
            backgroundColor:"white",
            paddingHorizontal: 8,
            borderRadius: 20
        }

        
        
    }
)

