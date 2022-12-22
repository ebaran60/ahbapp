import { StyleSheet } from "react-native";
import { Fonts } from "../../config";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:23,
        marginRight:32,
        marginTop:10,
        marginBottom:10,
    },
    image:{
        width:39,
        height:39,
    },
    right_container:{
        marginLeft:9,
        width: 272,
        backgroundColor:'#F3F3F3',
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    message_text:{
        color:'#000000',
        fontFamily:Fonts.Medium,
        fontWeight:'500',
        fontSize:16,
        lineHeight:18,
    },
});