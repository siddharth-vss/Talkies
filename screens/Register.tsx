/* eslint-disable prettier/prettier */

import { Text, ImageBackground, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from '../StyleSheet';
import { NavigationProp } from '@react-navigation/native';
const { h100, h10, h70,text20,m1,_mt1, flex, justify, Bglight, btn, White, inputs,Margin, titleMorfe, border, Magenta, centered, w90, appTitle} = style;
const Register = ({ navigation: { navigate  } }: { navigation: NavigationProp<any> }) => {
    return (
        <SafeAreaView>
            <ImageBackground style={[h100, centered]} source={require('../assets/bg.jpg')} >
                <View style={[titleMorfe, centered, h10, w90, border,Margin,_mt1]} >
                    <Text style={[Magenta, appTitle]}>Talkies</Text>
                </View>
                <View style={[Bglight, border, w90,h70]} >
                    <TextInput
                        // cursorColor={'magenta'}
                        style={[text20,h10, Magenta, border, inputs]}
                        placeholder="Enter Username"
                        placeholderTextColor={'#000000'}
                    />
                    <TextInput
                        // cursorColor={'magenta'}
                        style={[text20, Magenta, border, inputs]}
                        placeholder="Enter your email"
                        placeholderTextColor={'#000000'}
                    />
                    <TextInput
                        // cursorColor={'magenta'}
                        style={[text20, Magenta, border, inputs]}
                        placeholder="Enter Password"
                        placeholderTextColor={'#000000'}
                    />
                    <TextInput
                        // cursorColor={'magenta'}
                        style={[text20, Magenta, border, inputs]}
                        placeholder="Enter Mobile"
                        placeholderTextColor={'#000000'}
                    />
                    <View style={[flex, justify]}>
                        <Text>Allredy Have Account?</Text>
                        <TouchableOpacity style={[]} onPress={() => navigate('Login')}>
                            <Text style={[Magenta]}>Login</Text>
                        </ TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[btn,m1]} onPress={() => navigate('Home')}>
                        <Text style={[text20, White]}>Register</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Register;
