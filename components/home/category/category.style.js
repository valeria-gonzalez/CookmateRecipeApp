import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    categoryContainer: {
        //backgroundColor: COLORS.lightWhite,
        width: "100%",
        marginTop: SIZES.xLarge,
    },
    header: {
        //backgroundColor: COLORS.lightWhite,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    listContainer: {
        //backgroundColor: COLORS.gray,
        marginTop: SIZES.medium,
    },
    tab: (activeRecipeType, item) => ({
        width: 200,
        height: 300,
        //alignContent: "center",
        //justifyContent: "center",
        padding: 10,
        //backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.xxLarge,
        //borderWidth: 1,
        backgroundColor: activeRecipeType == item ? COLORS.orange02 : COLORS.secondary,
    }),
    tabImage: {
        width: "100%",
        height: "100%",
        borderRadius: SIZES.xxLarge,
        //marginLeft: 10,
        marginTop: -30,
    },
    tabText: (activeRecipeType, item) => ({
        marginTop: -30,
        marginLeft: 10,
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: activeRecipeType === item ? COLORS.white : COLORS.gray3,
    }),
});

export default styles;