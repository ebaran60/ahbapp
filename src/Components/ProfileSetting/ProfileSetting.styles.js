import { StyleSheet } from "react-native";

import { width,Fonts,colors } from "../../config";

export default StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.white,
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width*0.8,
        padding:5,
        margin:15,
    },
    text:{
        fontFamily:Fonts.poppinsBold,
        fontWeight:'600',
        fontSize:18,
        lineHeight:27,

    },
    touchableContainer:{
        width:59,
        height:28,
        borderRadius:50,
        backgroundColor:'#373737',
        justifyContent:'space-evenly',
        alignItems:'flex-end',

    },
    dot:{
        width:21,
        height:21,
        borderRadius:21/2,
        backgroundColor:colors.white,
        margin:5,
    },
    line:{
        height:2, 
        backgroundColor:'#D9D9D9',
        width:width*0.8,
    },
});