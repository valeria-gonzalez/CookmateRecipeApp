import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,
    scale, moderateScale, verticalScale, scaleFont
} from "../../../constants";

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: verticalScale(-10),
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10), 
    },
    header: {
    },
    headerTitle: {
        fontSize: scaleFont(SIZES.xLarge, SIZES.fontScale),
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    listContainer: {
        marginTop: verticalScale(SIZES.large),
        marginLeft: scale(10),
        //marginRight: scale(-10),
    },
    tab: (activeRecipeType, item) => ({
        height: verticalScale(290),
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        borderRadius: SIZES.xxLarge,
        backgroundColor: activeRecipeType == item ? COLORS.orange02 : COLORS.tertiary,
    }),
    tabImage: {
        width: scale(145),
        height: verticalScale(170),
        borderRadius: SIZES.xxLarge,
    },
    tabText: (activeRecipeType, item) => ({
        marginTop: verticalScale(20),
        marginLeft: scale(10),
        alignSelf: 'flex-start',
        fontFamily: FONT.bold,
        fontSize: scaleFont(SIZES.xLarge, SIZES.fontScale),
        color: activeRecipeType === item ? COLORS.white : COLORS.gray3,
    }),
});

export default styles;