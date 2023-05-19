import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, verticalScale, scale, scaleFont } from "../../../constants";

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
    },
    activityCont: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightWhite,
    },
    contentCont: {
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(400),
        width: scale(310),
        backgroundColor: COLORS.lightGray,
        //paddingVertical: verticalScale(40),
        paddingHorizontal: scale(15),
        borderRadius: 400,
    },
    logo: {
        color: COLORS.orange02,
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.xxLarge, SIZES.fontScale),
        textAlign: 'center',
        marginTop: verticalScale(-20),
        marginBottom: verticalScale(40),
    },
    activity: {
        marginTop: verticalScale(30),
    },
    cat: {
        marginLeft: scale(30),
        width: scale(300),
        height: verticalScale(300),
    },
    txtCont: {
        marginTop: verticalScale(40),
        //width: '90%',
        paddingHorizontal: scale(25),
        //backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityText:{
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.large + 5, SIZES.fontScale),
        textAlign: 'center',
        //marginTop: verticalScale(-15),
    },
});

export default styles;
