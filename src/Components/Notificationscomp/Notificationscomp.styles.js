import { StyleSheet } from "react-native";
import { colors, Fonts, width, height } from "../../config";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:height*0.9,
        padding:5,
    },
    date:{
        color:colors.black,
        fontFamily:Fonts.Medium,
        fontWeight:'400',
        fontSize:16,
        lineHeight:24,
        
    },
    flatlistContainer:{
        margin:5,
        padding:5,
    },
    leftContainer:{
        flexDirection:'row',
        margin:5,
    },
    image:{
        width:48,
        height:48,
        borderRadius:48/2
    },
    nameText:{
        color:colors.black,
        fontFamily:Fonts.Bold,
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
    },
    titleText:{
        color:colors.black,
        fontFamily:Fonts.Semibold,
        fontWeight:'400',
        fontSize:14,
        lineHeight:18,
    },
    touchableContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:height*0.1,
    },
    seemoreText:{
        color:colors.gray,
        fontFamily:Fonts.Medium,
        fontWeight:'600',
        fontSize:20,
        lineHeight:24,
        margin:5,
    },
    directionImage:{
        width:22,
        height:11,
    },
});