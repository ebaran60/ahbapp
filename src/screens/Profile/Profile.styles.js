import { StyleSheet } from "react-native";
import { colors, Fonts, height, width } from "../../config";

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white,
        width:width,
        height:height,
    },
    touchableContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        margin:15,
        width:width*0.8,
    },
    image:{
        marginRight:15,
        width:23,
        height:23,
    },
    text:{
        fontFamily:Fonts.poppinsRegular,
        fontWeight:'500',
        fontSize:18,
        lineHeight:27,
        color:'#2F2F2F',
    },
    line:{
        height:2, 
        backgroundColor:'#D9D9D9',
        width:width*0.8,
    },
    logoutContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.8,
        height:height*0.2,
    },
    logoutText:{
        fontFamily:Fonts.poppinsBold,
        fontSize:20,
        lineHeight:30,
        color:'#CD4F4F',
    },
});