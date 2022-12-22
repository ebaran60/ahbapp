import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        padding:5,
    },
    image:{
        width: 150,
        height: 240,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        padding:5
    },
    textContainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    text_image:{
        marginRight:5,
        marginBottom:5,
        width:15,
        height:15,
        resizeMode: 'contain',
    },
});