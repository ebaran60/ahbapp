import { StyleSheet } from "react-native";
import { Fonts } from "../../config";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        padding:10,
        borderRadius:5,
        alignItems:'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 5,

    },
    notificationImage: {
        width: 40,
        height: 40,

    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body_container: {
        marginLeft: '2%'
    },
    merhaba: {
        fontSize: 14,
        tintColor: '#B9B9B9',
    },
    name: {
        fontFamily:Fonts.Bold,
        fontWeight:'500',
        fontSize:16,
        lineHeight:19,
        color:'#000000',
    },
    touchable_container: {
        alignItems:'flex-end'
    },
});