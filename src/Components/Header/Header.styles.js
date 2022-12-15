import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'space-between',
        padding:10,
        borderRadius:5,
        alignItems:'center'
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 5,

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
    name: {},
    touchable_container: {
        alignItems:'flex-end'
    },
});