import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,
    scale, moderateScale, verticalScale, scaleFont
} from "../../../constants";

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        width: scale(155),
        height: verticalScale(270),
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.black01,
    },
    cardImage: {
        width: scale(155),
        height: verticalScale(270),
        borderRadius: 50,
        opacity: 0.8,
    },
    cardDetContainer: {
        position: 'absolute',
        bottom: verticalScale(30),
        width: scale(130),
        paddingLeft: scale(10),
    },
    cardNameText: {
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.large, SIZES.fontScale),
        color: COLORS.white,
    },
    cardPriceCont: {
        marginTop: verticalScale(5),
        backgroundColor: COLORS.primary,
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(1),
        borderRadius: 30,
        width: '80%',
    },
    cardPriceText: {
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.medium + 1, SIZES.fontScale),
        color: COLORS.white,
    },
});

export default styles;