import { StyleSheet } from "react-native";
import { width } from '../../config'

export default StyleSheet.create({
    container:{
        flex:1,
    },
    bottom_container:{
        backgroundColor:'black',
        width:width,
        height:60,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    left_container:{
        backgroundColor:'#2D2C2C',
        borderRadius:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    input:{
        width:width*0.76,
    },
    right_container:{
        marginRight:10,
    },
    image:{
        width:27,
        height:27,
    },
});