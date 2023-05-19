import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, moderateScale, scale, verticalScale,
scaleFont } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(80),
    },
    appLogo: {
        marginBottom: verticalScale(10),
    },
    logoTxt: {
        textAlign: 'center',
        fontFamily: FONT.bold,
        fontSize: scaleFont(55, SIZES.fontScale),
        color: COLORS.primary,
    },
    loginDesc: {
        marginTop: verticalScale(15),
        //backgroundColor: COLORS.gray2,
    },
    descTitle: {
        fontFamily: FONT.bold,
        fontSize: scaleFont(40, SIZES.fontScale),
        textAlign: 'center',
        color: COLORS.primary,
        //marginTop: verticalScale(20),
        //marginBottom: verticalScale(20),
    },
    descSubtitle: {
        fontFamily: FONT.regular,
        fontSize: scaleFont(19, SIZES.fontScale),
        textAlign: 'center',
        color: COLORS.gray,
    },
    imgCont: {
        //marginTop: verticalScale(10),
        //backgroundColor: COLORS.gray2,
        width: 250,
        height: 300,
    },
    loginImg: {
        width: '100%',
        height: '100%',
    },
    btnCont: {
        //marginTop: verticalScale(10),
        width: '100%',
        height: verticalScale(70),
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        justifyContent: 'center',
    },
    btnTxt: {
        fontSize: scaleFont(25, SIZES.fontScale),
        fontFamily: FONT.bold,
        color: COLORS.white,
        textAlign: 'center',
    },
});

export default styles;