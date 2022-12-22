import { StyleSheet } from "react-native";
import { Fonts } from "../../config";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        alignItems:'center'
    },
    image: {
        width: 48,
        height: 48,
        marginRight: 5,

    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft:13,
        width:59,
        height:18,
        fontFamily:Fonts.Medium,
        fontWeight:'400',
        fontSize:12,
        lineHeight:18,
        color:'#8D8D8D',
    },
    name: {
        marginLeft:13,
        width:78,
        height:24,
        fontFamily:Fonts.Medium,
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
        color:'black',
    },
    touchable_container: {
        backgroundColor: '#1C1B1B',
        borderRadius:50,
        width:90,
        height:40,
        alignItems:"center",
        justifyContent:'center'
    },
});