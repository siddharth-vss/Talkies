/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

    appTitle:{
        fontSize : 56,
        color:'#82FFC4',
    },
    titleMorfe:{
        backgroundColor:'#ffffff33',
        marginBottom :'15%',
        borderColor:'#ffffff',
        borderWidth : 1,
        marginTop : '-50%',
    },
    inputs:{
        backgroundColor:'#ffffff33',
        marginBottom :'7%',
        borderColor:'#000000',
        borderWidth : 1,
        marginTop : '7%',
        width: '80%' ,
        alignSelf:"center",
        borderRadius:10,
        height:45,
        textAlignVertical:'top',
        justifyContent:'flex-start',
    },
    btn:{
        alignSelf:"center",
        backgroundColor:'#3182CE',
        paddingHorizontal : 10,
        borderRadius:10,
    },
    txt:{

    },


    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    sectionButton: {
        marginTop: 32,
    },
    sectionButtonText: {
        fontSize: 18,
        fontWeight: '600',
    },
    //heights
    w100:{
        width: "100%",
    },
    h100:{
        height: "100%",
    },
    w90:{
        width: "90%",
    },
    h90:{
        height: "90%",
    },
    w80:{
        width: "80%",
    },
    h80:{
        height: "80%",
    },
    w70:{
        width: "70%",
    },
    h70:{
        height: "70%",
    },
    w60:{
        width: "60%",
    },
    h60:{
        height: "60%",
    },
    w50:{
        width: "50%",
    },
    h50:{
        height: "50%",
    },
    w40:{
        width: "40%",
    },
    h40:{
        height: "40%",
    },
    w30:{
        width: "30%",
    },
    h30:{
        height: "30%",
    },
    w20:{
        width: "20%",
    },
    h20:{
        height: "20%",
    },
    w10:{
        width: "10%",
    },
    h10:{
        height: "10%",
    },

    // Colors
    colorPrimary: { backgroundColor: '#E57373' },
    colorSecondary: { borderWidth: 1, borderRadius: 4, borderColor: '#9e9e9e' },
    //Color
    White: { color: '#FFFFFF' },
    Light: { color: '#FFFFFF' },
    Black: { color: '#000000' },
    Dark: { color: '#000000' },
    Red: { color: '#FF0000' },
    Green: { color: '#00FF00' },
    Blue: { color: '#0000FF' },
    Yellow: { color: '#FFFF00' },
    Magenta: { color: '#FF00FF' },
    Cyan: { color: '#00FFFF' },

    //Background
    Bgwhite: { backgroundColor: '#FFFFFF' },
    Bgblack: { backgroundColor: '#000000' },
    Bgdark: { backgroundColor: '#000000' },
    Bglight: { backgroundColor: '#FFFFFF' },
    Bgred: { backgroundColor: '#FF0000' },
    Bggreen: { backgroundColor: '#00FF00' },
    Bgblue: { backgroundColor: '#0000FF' },
    Bgyellow: { backgroundColor: '#FFFF00' },
    Bgmagenta: { backgroundColor: '#FF00FF' },
    Bgcyan: { backgroundColor: '#00FFFF' },


    flex: { flexDirection: 'row' },
    rowReverse: { flexDirection: 'row-reverse' },
    colReverse: { flexDirection: 'column-reverse' },
    justify: { justifyContent: 'center' },
    align: { alignItems: 'center' },
    centered: { justifyContent: 'center', alignItems: 'center' },
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },
    justifyContentEnd: { justifyContent: 'flex-end' },
    justifyContentStart: { justifyContent: 'flex-start' },
    justifySpaceAround: { justifyContent: 'space-around' },
    justifySpaceBetween: { justifyContent: 'space-between' },
    justifySpaceEvenly: { justifyContent: 'space-evenly' },
    alignItemsCenter: { alignItems: 'center' },
    alignSelfCenter: { alignSelf: 'center' },
    alignSelfFlexEnd: { alignSelf: 'flex-end' },
    alignSelfFlexStart: { alignSelf: 'flex-start' },
    alignSelfStretch: { alignSelf: 'stretch' },
    alignSelfBaseline: { alignSelf: 'baseline' },

    border:{borderRadius : 25},

    // Layout
    view: {
        flex: 1,
    },
    Margin:{
        marginTop: '-25%',
    },
    //All
    m1:{margin:'10%'},
    m2:{margin:'20%'},
    m3:{margin:'30%'},
    m4:{margin:'40%'},
    m5:{margin:'50%'},
    m6:{margin:'60%'},
    m7:{margin:'70%'},
    m8:{margin:'80%'},
    m9:{margin:'90%'},
    m10:{margin:'100%'},
    //Top
    mt1:{marginTop:'10%'},
    mt2:{marginTop:'20%'},
    mt3:{marginTop:'30%'},
    mt4:{marginTop:'40%'},
    mt5:{marginTop:'50%'},
    mt6:{marginTop:'60%'},
    mt7:{marginTop:'70%'},
    mt8:{marginTop:'80%'},
    mt9:{marginTop:'90%'},
    mt10:{marginTop:'100%'},
    //Bottom
    mb1:{marginBottom:'10%'},
    mb2:{marginBottom:'20%'},
    mb3:{marginBottom:'30%'},
    mb4:{marginBottom:'40%'},
    mb5:{marginBottom:'50%'},
    mb6:{marginBottom:'60%'},
    mb7:{marginBottom:'70%'},
    mb8:{marginBottom:'80%'},
    mb9:{marginBottom:'90%'},
    mb10:{marginBottom:'100%'},
    //Left
    ml1:{marginLeft:'10%'},
    ml2:{marginLeft:'20%'},
    ml3:{marginLeft:'30%'},
    ml4:{marginLeft:'40%'},
    ml5:{marginLeft:'50%'},
    ml6:{marginLeft:'60%'},
    ml7:{marginLeft:'70%'},
    ml8:{marginLeft:'80%'},
    ml9:{marginLeft:'90%'},
    ml10:{marginLeft:'100%'},
    //Right
    mr1:{marginRight:'10%'},
    mr2:{marginRight:'20%'},
    mr3:{marginRight:'30%'},
    mr4:{marginRight:'40%'},
    mr5:{marginRight:'50%'},
    mr6:{marginRight:'60%'},
    mr7:{marginRight:'70%'},
    mr8:{marginRight:'80%'},
    mr9:{marginRight:'90%'},
    mr10:{marginRight:'100%'},
    //All mainus
    _m1:{margin:'-10%'},
    _m2:{margin:'-20%'},
    _m3:{margin:'-30%'},
    _m4:{margin:'-40%'},
    _m5:{margin:'-50%'},
    _m6:{margin:'-60%'},
    _m7:{margin:'-70%'},
    _m8:{margin:'-80%'},
    _m9:{margin:'-90%'},
    _m10:{margin:-'100%'},
    //Top mainus
    _mt1:{marginTop:'-10%'},
    _mt2:{marginTop:'-20%'},
    _mt3:{marginTop:'-30%'},
    _mt4:{marginTop:'-40%'},
    _mt5:{marginTop:'-50%'},
    _mt6:{marginTop:'-60%'},
    _mt7:{marginTop:'-70%'},
    _mt8:{marginTop:'-80%'},
    _mt9:{marginTop:'-90%'},
    _mt10:{marginTop:-'100%'},
    //Bottom mainus
    _mb1:{marginBottom:'-10%'},
    _mb2:{marginBottom:'-20%'},
    _mb3:{marginBottom:'-30%'},
    _mb4:{marginBottom:'-40%'},
    _mb5:{marginBottom:'-50%'},
    _mb6:{marginBottom:'-60%'},
    _mb7:{marginBottom:'-70%'},
    _mb8:{marginBottom:'-80%'},
    _mb9:{marginBottom:'-90%'},
    _mb10:{marginBottom:-'100%'},
    //Left mainus
    _ml1:{marginLeft:'-10%'},
    _ml2:{marginLeft:'-20%'},
    _ml3:{marginLeft:'-30%'},
    _ml4:{marginLeft:'-40%'},
    _ml5:{marginLeft:'-50%'},
    _ml6:{marginLeft:'-60%'},
    _ml7:{marginLeft:'-70%'},
    _ml8:{marginLeft:'-80%'},
    _ml9:{marginLeft:'-90%'},
    _ml10:{marginLeft:-'100%'},
    //Right mainus
    _mr1:{marginRight:'-10%'},
    _mr2:{marginRight:'-20%'},
    _mr3:{marginRight:'-30%'},
    _mr4:{marginRight:'-40%'},
    _mr5:{marginRight:'-50%'},
    _mr6:{marginRight:'-60%'},
    _mr7:{marginRight:'-70%'},
    _mr8:{marginRight:'-80%'},
    _mr9:{marginRight:'-90%'},
    _mr10:{marginRight:-'100%'},

    // Text    text15: { fontSize: 15 },
    text20: { fontSize: 20, lineHeight: 28 },
    text30: { fontSize: 30, lineHeight: 46 / 3 },
    text45: { fontSize: 45 / 1.75, lineHeight: 45 * 1.75 },
    h1: { fontFamily: "HelveticaNeue-Medium", color: '#000000', textAlign: "left", fontSize: 45 / 1.75, lineHeight: 45 * 1.75 },
    h2: { fontFamily: "HelveticaNeue", color: '#000000', textAlign: "left", fontSize: 30, lineHeight: 46 / 3 },
    p: { color: '#000000', textAlign: "left", marginVertical: 9, lineHeight: 19 },
    ul: { paddingLeft: 19 },
    li: { marginBottom: 9 },

});
