import { StyleSheet } from "react-native";
import { Fonts } from "../../config";

export default StyleSheet.create({
    container:{
        margin:11
    },
    header_text:{
        marginBottom:8,
        fontFamily:Fonts.Bold,
        fontWeight:'bold',
        fontSize:16,
        lineHeight:24,
        color:'black'
    },
    comment_text:{
        fontFamily:Fonts.Bold,
        fontWeight:'bold',
        fontSize:12,
        lineHeight:18,
        color:'black'
    },
})