import { StyleSheet } from "react-native";
import { colors, width, height, Fonts } from '../../config';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        alignItems:'center',
        padding:10,
    },
    image:{
        width:width*0.5,
        height:height*0.2,
        margin:40
    },
    text:{
        fontFamily:Fonts.Medium,
        fonts:20,
        lineHeight:30,
        fontWeight:'400',
        margin:10,
        color:'#C6C6C6',
    },

});