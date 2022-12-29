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
    inputContainer:{

    },
    text:{

    },
    input:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#B0B0B0',
        width:width*0.8,
        height:height*0.05,
    },
});