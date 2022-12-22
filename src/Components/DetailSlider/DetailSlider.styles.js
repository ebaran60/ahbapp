import { StyleSheet } from "react-native";
import { width, height } from "../../config";

export default StyleSheet.create({
    container: {

        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width:width,
        height:242,
        resizeMode: 'contain',
    },
});