/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { style } from '../StyleSheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { Bglight, h10, flex, justifySpaceAround, alignItemsCenter } = style;
const Nav = () => {
  return (
    <View style={[Bglight, h10, flex, justifySpaceAround, alignItemsCenter]} >

                    {/* <TouchableOpacity> */}
                    <FontAwesome.Button
                        name="search"
                        backgroundColor="#ffffff"
                        color={'#000'}
                        onPress={() => { Alert.alert('hello'); }}
                    />

                    {/* </TouchableOpacity> */}

                    <Text style={[styles.txt]} >Talkies</Text>

                    <TouchableOpacity style={[alignItemsCenter]} onPress={() => { Alert.alert('hii'); }}>
                        <Image source={require('../assets/img.png')} style={[styles.img]} />
                    </TouchableOpacity>

                </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
    block: {
        width: wp('100%'),
        height: hp('10%'),
        borderBottomColor: '#000',
        borderWidth: 0.5,
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'grey',
    },
    txt: {
        fontSize: 30,
        color: '#000',
        marginTop: 10,
        fontFamily: 'Harlow Solid Italic',
    },
    name:{
        fontSize: 20,
        color: '#000',
        marginLeft : 5,

    },
    des:{
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        marginLeft : 10,
    },
});
