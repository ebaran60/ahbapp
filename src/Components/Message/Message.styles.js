import { StyleSheet } from "react-native";
import { colors, Fonts } from "../../config";

export default StyleSheet.create({
    selfContainer: {
        flexDirection: 'row-reverse',
        margin: 10
    },
    otherContainer: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    },
    otherMessageContainer: {
        padding: 10,
        marginLeft: 4,
        width: '70%',
        backgroundColor: '#F3F3F3',
        borderRadius:10,
        borderTopLeftRadius: 0,
    },
    selfMessageContainer: {
        padding: 10,
        marginRight:4,
        width: '70%',
        backgroundColor: colors.black800,
        borderRadius: 10,
        borderTopRightRadius: 0,
    },
    otherMessageText: {
        color: colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
    },
    selfMessageText: {
        color: colors.white,
        fontFamily: Fonts.Medium,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
    },
});