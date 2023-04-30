import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,
    scale, moderateScale, verticalScale, scaleFont, fontPixel
} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: scale(15),
    },
    welcomeContainer: {
        //flexDirection: 'column',
        marginTop: verticalScale(0),
        //alignContent: 'center',
        //justifyContent: 'space-around',
        //flex: 1,
    },
    discoverMsg: {
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.xLarge, SIZES.fontScale),
        color: COLORS.orange02,
        marginBottom: verticalScale(-5),
    },
    userName: {
        fontFamily: FONT.black,
        fontSize: scaleFont(42, SIZES.fontScale),
        color: COLORS.primary,
        lineHeight: verticalScale(60),
    },
    instructionContainer: {
        marginTop: verticalScale(SIZES.large),
        marginLeft: scale(-15),
        flexDirection: 'row',
    },
    roundedContainer: {
        backgroundColor: COLORS.tertiary,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(SIZES.large),
        paddingVertical: verticalScale(SIZES.large),
        paddingRight: scale(SIZES.xxxLarge),
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        height: verticalScale(110),
    },
    instructionMsg: {
        fontFamily: FONT.regular,
        fontSize: scaleFont(SIZES.medium, SIZES.fontScale),
        color: COLORS.gray3,
    },
    bold: {
        fontFamily: FONT.bold,
    },
    groceryContainer: {
        width: scale(140),
        height: verticalScale(150),
        marginTop: verticalScale(-20),
        marginLeft: scale(-20),
    },
    groceryImage: {
        width: '100%',
        height: '100%',
    },
});

export default styles;