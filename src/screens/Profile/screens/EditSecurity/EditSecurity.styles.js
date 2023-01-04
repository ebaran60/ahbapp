import { StyleSheet } from "react-native";
import { colors, Fonts, height, width  } from "../../../../config";

export default StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.white,
        width:width,
    },
    buttonContainer:{
        backgroundColor:'#373737',
        width:width*0.8,
        height:height*0.05,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontFamily:Fonts.poppinsMedium,
        color:colors.white,
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
    },
});