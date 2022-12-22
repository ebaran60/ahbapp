import { StyleSheet } from "react-native";
import { Fonts,width } from "../../config";

export default StyleSheet.create({
    container:{
        margin:11,
    },
    header_text:{
        marginBottom:8,
        fontFamily:Fonts.Bold,
        fontWeight:'bold',
        fontSize:16,
        lineHeight:24,
        color:'black'
    },
    image:{
        width:338,
        height:153,
        borderRadius:20,
        resizeMode: 'contain',
    },

});