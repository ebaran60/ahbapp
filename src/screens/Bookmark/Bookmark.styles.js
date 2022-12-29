import { StyleSheet } from "react-native";
import { colors, height, width } from "../../config";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width:width,
        height:height,
        
    },
    noResult:{
        backgroundColor:colors.white,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});