    import React, { useState } from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
    import { SafeAreaView } from 'react-native-safe-area-context';
    import PrimaryBtn from '../components/PrimaryBtn';
    import { Ionicons } from '@expo/vector-icons';
    import { LinearGradient } from 'expo-linear-gradient';
    import { z } from 'zod'
    import {useForm, Controller} from 'react-hook-form'
    import {zodResolver} from '@hookform/resolvers/zod'
    // import { formValidationSchema, formValidation } from '../schema/validation.schema'




    const formSchema = z.object({
        full_name: z.string().min(3, 'full name must be at least 3 characters'),
        email_or_phone: z.string().email('Please enter a valid email'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
    });


export default function SignUp: React.FC<SignUpProp>({onPress, navigation, label}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry);
    };


    type SignUpProps = {
        navigation: NavigationProp<RootStackParamList, 'SignUp'>;
    };    
        const navigateToSignIn =()=>{
            navigation.navigate("SignIn")
        }

    type formValidationSchema = {
        example: string
        exampleRequired: string
    }
    const { control, handleSubmit } = useForm({
            defaultValues: {
            full_name: '',
            email_or_phone: '',
            password: '',
            confirm_password: '',
            }
        });
        const onSubmit = (data)=>{
            Alert.alert("Successful", JSON.stringify(data))
        }


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

                <Controller
                    control={control}
                    name='full_name'
                    render={({field:{value, onChange, onBlur} })=>(
                        <TextInput
                            style={styles.inputField}
                            keyboardType='default'
                            placeholder='Usman Chris'
                            placeholderTextColor="#52545c"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                    
                </View>
                </View>
                <View>
                <Text style={styles.label}>Email or Phone-number</Text>
                <View style={styles.inputFieldContainer}>
                    <Controller
                        control={control}
                        name='email_or_phone'
                        render={({ field: { value, onChange, onBlur }})=>(
                            <TextInput
                                style={styles.inputField}
                                keyboardType='email-address'
                                placeholder='email'
                                placeholderTextColor="#52545c"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}

                    />                        
                </View>
                </View>
                <View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputFieldContainer}>
                        <Controller
                            control={control}
                            name={'password'}
                            render={({ field: { value, onChange, onBlur }})=>(
                                <TextInput
                                    style={styles.inputField}
                                    keyboardType='default'
                                    placeholder='password'
                                    placeholderTextColor="#52545c"
                                    secureTextEntry={secureEntry}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        <Ionicons name={secureEntry ? 'eye' : 'eye-off'} size={24} color="grey" onPress={toggleSecureEntry} />
                </View>
                </View>
                <View>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputFieldContainer}>

                        <Controller
                            control={control}
                            name={'confirm_password'}
                            render={({ field: { value, onChange, onBlur }})=>(
                            <TextInput
                                style={styles.inputField}
                                keyboardType='default'
                                placeholder='password'
                                secureTextEntry={secureEntry}
                                placeholderTextColor="#52545c"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                            )}
                    />
                    <Ionicons name={secureEntry ? 'eye' : 'eye-off'} size={24} color="grey" onPress={toggleSecureEntry} />
                </View>
                </View>
            </View>
            <View>
                <PrimaryBtn label="SIGN UP" onPress={handleSubmit} />
            </View>
            <View style={styles.view5}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SingIn')}>
                    <Text style={styles.forgotPasswordText}>SIGN IN</Text>
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
        paddingVertical: 1,
        fontWeight: '300',
        color: '#ba1638',
    },
    inputFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: 'black'
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



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import PrimaryBtn from '../components/PrimaryBtn';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { z, ZodType } from 'zod';
// import { useForm, Controller } from 'react-hook-form';

// const formSchema = z.object({
//     full_name: z.string().min(3, 'Full name must be at least 3 characters'),
//     email_or_phone: z.string().email('Please enter a valid email'),
//     password: z.string().min(8, 'Password must be at least 8 characters'),
// });

// type FormData = z.infer<typeof formSchema>;

// // export default function SignUp = () => {
// const SignUp = ()=>{
//     const [secureEntry, setSecureEntry] = useState(true);
//     const { control, handleSubmit } = useForm<FormData>({
//         defaultValues: {
//             full_name: '',
//             email_or_phone: '',
//             password: '',
//         }
//     });

//     const onSubmit = (data: FormData) => {
//         Alert.alert("Successful", JSON.stringify(data));
//     }

//     const toggleSecureEntry = () => {
//         setSecureEntry(!secureEntry);
//     };

//     return (
//         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ba1638', '#2c1737']}>
//             <SafeAreaView>
//                 <KeyboardAvoidingView behavior="padding">
//                     <View style={styles.container1}>
//                         <Text style={styles.headerText1}>Create</Text>
//                         <Text style={styles.headerText2}>Your Account</Text>
//                     </View>
//                     <View style={styles.container2}>
//                         <View style={styles.view2}>
//                             <View>
//                                 <Text style={styles.label}>Name</Text>
//                                 <View style={styles.inputFieldContainer}>
//                                     <Controller
//                                         control={control}
//                                         name='full_name'
//                                         render={({ field: { value, onChange, onBlur } }) => (
//                                             <TextInput
//                                                 style={styles.inputField}
//                                                 keyboardType='default'
//                                                 placeholder='Usman Chris'
//                                                 placeholderTextColor="#52545c"
//                                                 value={value}
//                                                 onChangeText={onChange}
//                                                 onBlur={onBlur}
//                                             />
//                                         )}
//                                     />
//                                 </View>
//                             </View>
//                             {/* Add other fields similarly */}
//                         </View>
//                         <View>
//                             <PrimaryBtn label="SIGN UP" onPress={handleSubmit(onSubmit)} />
//                         </View>
//                         <View style={styles.view5}>
//                             <Text>Don't have an account?</Text>
//                             <TouchableOpacity>
//                                 <Text style={styles.forgotPasswordText}>SIGN UP</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </KeyboardAvoidingView>
//             </SafeAreaView>
//         </LinearGradient>
//     );
// }
// export default SignUp

// const styles = StyleSheet.create({
//     container1: {
//         height: '25%',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         paddingLeft: 30
//     },
//     headerText1: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     headerText2: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 26,
//     },
//     container2: {
//         height: '75%',
//         paddingHorizontal: 24,
//         gap: 10,
//         justifyContent: 'space-evenly',
//         borderTopRightRadius: 30,
//         borderTopLeftRadius: 30,
//         backgroundColor: 'white'
//     },
//     view2: {
//         gap: 18
//     },
//     label: {
//         paddingVertical: 4,
//         color: '#ba1638',
//     },
//     inputFieldContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderRadius: 10,
//         paddingVertical: 1,
//         paddingHorizontal: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: 'black'
//     },
//     inputField: {
//         width: 240,
//         height: 44,
//     },
//     forgotPasswordText: {
//         color: 'black',
//         fontWeight: 'bold'
//     },
//     view5: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         gap: 15
//     },
// });










// type RootStackParamList = {
//   Welcome: undefined;
//   SignUp: undefined;
//   SignIn: undefined;
// }