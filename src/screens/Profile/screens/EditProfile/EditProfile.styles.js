import { StyleSheet } from "react-native";
import { colors, Fonts, height, width  } from "../../../../config";

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white,
        width:width,
        height:height,
    },
    image:{
        width:90,
        height:90,
        borderRadius:90/2,
    },
    inputContainer:{
        marginVertical:10,
    },
    text:{
        fontFamily:Fonts.poppinsBold,
        fontSize:16,
        lineHeight:24,

    },
    input:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#B0B0B0',
        width:width*0.8,
        height:height*0.05,
    },
    buttonContainer:{
        backgroundColor:colors.black,
        width:width*0.8,
        height:height*0.1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:25,
    },
    buttonText:{
        fontFamily:Fonts.poppinsBold,
        color:colors.white,
        fontWeight:'600',
        fontSize:18,
        lineHeight:28,
    },
});