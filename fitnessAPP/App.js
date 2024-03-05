// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator , } from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native-stack'
// import PrimaryBtn from './src/components/PrimaryBtn';
// import SignIn from './src/pages/SignIn'
// import SignUp from './src/pages/SignUp'
// import Welcome from  './src/pages/Welcome'


// const Stack = createStackNavigator();
// export default function App() {
//     return (
      
//       <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
//          <Stack.Screen name="Welcome" component={Welcome} />
//          <Stack.Screen name='SignUp' component={SignUp}/>
//          <Stack.Screen name="SignIn" component={SignIn} />
//       </Stack.Navigator>
//     );
// }






import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Welcome from './src/pages/Welcome';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

