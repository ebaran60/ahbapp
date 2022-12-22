import { StyleSheet } from "react-native";
import { colors,Fonts } from "../../config";

export default StyleSheet.create({
    contrainer:{
        padding:2,
        margin:10,
    },
    date_container:{
        flexDirection: 'row',
    },
    location_container:{
        flexDirection: 'row',
    },
    image:{
        width:50,
        height:50,
    },
    touchable_container:{
        marginLeft:13,
        borderWidth:1,
        borderColor:'#BDBDBD',
        borderRadius:25,
        alignItems:'center',
        padding:2,
        backgroundColor:'#E1E1E1',
        width:166,
        height:28
    },
    header_text:{
        fontFamily:Fonts.Bold,
        margin:1,
        marginLeft:13,
        fontSize:18,
        lineHeight:27,
        fontWeight:'600',
        color:'#696969'
    },
    porps_text:{
        fontFamily:Fonts.Semibold,
        margin:1,
        marginLeft:13,
        fontSize:14,
        lineHeight:21,
        fontWeight:'600',
        color:'#696969'
    },
});