import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,
    scale, moderateScale, verticalScale, scaleFont
} from "../../../constants";

const styles = StyleSheet.create({
    arrowContainer: {
        width: scale(50),
        height: verticalScale(50),
    },
    icons: {
        color: COLORS.orange02,
    },
    filterContainer: {
        width: scale(40),
        height: verticalScale(40),
        marginRight: scale(10),
        marginTop: verticalScale(10),
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleHeading: {
        fontFamily: FONT.black,
        fontSize: scaleFont(SIZES.xxxLarge + 5, SIZES.fontScale),
        color: COLORS.primary,
    },

});

export default styles;