import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    arrowContainer: {
        width: 40,
        height: 40,
    },
    icons: {
        color: COLORS.orange02,
    },
    filterContainer: {
        width: 40,
        height: 40,
        marginLeft: "83%",
        marginTop: "-14%",
    },
    titleContainer: {
        width: "100%",
        backgroundColor: COLORS.lightWhite,
        //marginTop: 5,
    },
    titleHeading: {
        fontFamily: FONT.black,
        fontSize: SIZES.xxxLarge + 5,
        color: COLORS.primary,
    },

});

export default styles;