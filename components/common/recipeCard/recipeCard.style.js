import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        width: '46%',
        height: 260,
        alignItems: 'center',
        //padding: 15,
        //marginTop: 30,
        borderRadius: 50,
        backgroundColor: COLORS.black01,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        opacity: 0.8,
        //tintColor: COLORS.transparentDarkGray,
    },
    cardDetContainer: {
        width: '80%',
        //paddingHorizontal: 20,
        //backgroundColor: COLORS.transparentDarkGray,
        //zIndex: 2,
        marginLeft: '-90%',
        marginBottom: '-50%',
    },
    cardNameText: {
        //flex: 1,
        fontFamily: FONT.bold,
        fontSize: SIZES.medium + 1,
        color: COLORS.white,
    },
    cardPriceCont: {
        backgroundColor: COLORS.primary,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderRadius: 30,
        width: '80%',
    },
    cardPriceText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium + 1,
        color: COLORS.white,
    },
});

export default styles;