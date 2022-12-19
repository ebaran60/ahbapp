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
        height: 235,
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
    }
});