/* eslint-disable prettier/prettier */
import { View, ScrollView, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { style } from '../StyleSheet';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Nav from './Nav';
import { NavigationProp } from '@react-navigation/native';

SystemNavigationBar.stickyImmersive();
const { h100, w100, Bglight, flex,h10,  mt1,align,justify } = style;
const Home = ({navigation:{navigate}} : {navigation : NavigationProp<any> }) => {
    const data = [

        {
            id: 1,
            name: 'user',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1709213851/wd6xe1t3b4r2xhtm3wql.png',
        },
        {
            id: 1,
            name: '2D',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://i.pinimg.com/564x/cc/5e/9d/cc5e9da880a6e017e9dba5ced4fcb620.jpg',
        },
        {
            id: 1,
            name: 'SP',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/keib7jpdlosmjktvfq90.jpg',
        },
        {
            id: 1,
            name: 'EF1',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1709213851/wd6xe1t3b4r2xhtm3wql.png',
        },
        {
            id: 1,
            name: 'NGO',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii'],
            img: 'https://i.pinimg.com/564x/cc/5e/9d/cc5e9da880a6e017e9dba5ced4fcb620.jpg',
        },
        {
            id: 1,
            name: 'Hari',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/keib7jpdlosmjktvfq90.jpg',
        },
        {
            id: 1,
            name: 'TRP',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1709213851/wd6xe1t3b4r2xhtm3wql.png',
        },
        {
            id: 1,
            name: 'DFD',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://i.pinimg.com/564x/cc/5e/9d/cc5e9da880a6e017e9dba5ced4fcb620.jpg',
        },
        {
            id: 1,
            name: 'WE R',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/keib7jpdlosmjktvfq90.jpg',
        },
        {
            id: 1,
            name: 'WEB',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1709213851/wd6xe1t3b4r2xhtm3wql.png',
        },
        {
            id: 1,
            name: 'RuTH',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii'],
            img: 'https://i.pinimg.com/564x/cc/5e/9d/cc5e9da880a6e017e9dba5ced4fcb620.jpg',
        },
        {
            id: 1,
            name: 'Wtf',
            Massage:[ 'Hiii', 'Hwllo', 'How are you', 'Hello', 'Hiii', 'Boss'],
            img: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/keib7jpdlosmjktvfq90.jpg',
        },

    ];

    return (
        <SafeAreaView >
            <View style={[h100, w100]}>
                <Nav />
                <View style={[mt1, { height: hp('90%') }]} >
                    <ScrollView style={[h100]}>
                        {data.map((item, index) => (
                            <TouchableOpacity key={index} style={[styles.block, Bglight, flex]} onPress={()=>navigate('Chat',{ name:item.name , img : item.img ,msgs : item.Massage })}>
                                <TouchableOpacity style={[align,justify]}>
                                    <Image source={{uri : item.img}} style={[styles.img]} />
                                </TouchableOpacity>
                                <View>
                                    <Text style={[styles.name]}> {item.name + index}</Text>
                                    <Text style={[styles.des]}>{item.Massage[item.Massage.length - 1]}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;

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
