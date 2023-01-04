import { StyleSheet } from "react-native";
import { colors, Fonts, height, width  } from "../../../../config";

export default StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.white,
        width:width,
        height:height,
    },
    line:{
        height:2, 
        backgroundColor:'#D9D9D9',
        width:width*0.8,
    },
    touchableContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        margin:15,
        width:width*0.8,
    },
    text:{
        fontFamily:Fonts.poppinsMedium,
        fontWeight:'500',
        fontSize:18,
        lineHeight:27,
        color:'#2F2F2F',
    },
});