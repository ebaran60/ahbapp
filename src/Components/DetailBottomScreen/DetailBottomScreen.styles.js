import { StyleSheet } from "react-native";
import { Fonts } from "../../config";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    left_container:{
        flexDirection:'row',
    },
    image:{
        margin:5,
        width:43,
        height:43,
    },
    right_container:{ 
        width:179,
        height:43,
        backgroundColor:'#1C1B1B',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#FFFAFA',
        fontFamily:Fonts.Semibold,
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
    },
});