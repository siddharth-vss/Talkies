/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from '../StyleSheet';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

type RouteParamList = {
    Chat: {
      name: string;
      img: string;
      msgs: string[];
    };
  };

import Feather from 'react-native-vector-icons/Feather';
import { RouteProp } from '@react-navigation/native';
const { h100, w100, w70, h80, Bglight, inputs, h10, align, justifySpaceAround, flex } = style;
const Chat = ({ route }: { route: RouteProp<RouteParamList, 'Chat'> }) => {
    const { name, img ,msgs } = route.params;
    return (
        <>
            <View style={[h100, w100]}>

                <View style={[h10, align, justifySpaceAround, flex, Bglight]} >
                    <TouchableOpacity>
                        <Image source={{uri : img}} style={[styles.img]} />
                    </TouchableOpacity>
                    <View style={[w70]} >
                        <Text style={[styles.txt]} >{name}</Text>
                        <Text style={[styles.desc]} >online</Text>
                    </View>
                </View>

                <ScrollView style={[h80]} >
                    {msgs.map((msg : string ,index : number)=>(
                    <Text key={index} style={[styles.txt]} >{msg}</Text>
                    ))}
                </ScrollView>

                <View style={[h10, Bglight, flex]} >
                    <TextInput style={[inputs]} />
                    <Feather.Button

                        backgroundColor="#ffffff"
                        color="#0000ff"
                        size={30}
                        name="send"
                        style={styles.send}
                        onPress={() => { Alert.alert('hello'); }}
                    />
                </View>

            </View>
        </>
    );
};

export default Chat;

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    txt: {
        fontSize: 20,
    },
    desc: {
        fontSize: 15,
        color: 'grey',
    },
    send: {
        // height: 50,
        backgroundColor: '#ffffff',
        color: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        marginTop: 10,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },
});
