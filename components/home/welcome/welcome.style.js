import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    welcomeContainer: {
        width: "100%",
        backgroundColor: COLORS.lightWhite,
    },
    discoverMsg: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    userName: {
        fontFamily: FONT.black,
        fontSize: SIZES.xxxLarge,
        color: COLORS.black03,
    },
    roundedContainer: {
        flex: 1,
        backgroundColor: COLORS.tertiary,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: SIZES.xLarge,
        marginLeft: "-5%",
        padding: SIZES.large,
        //paddingLeft: SIZES.xLarge,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        width: "80%",
        height: 110,
    },
    instructionMsg: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.gray3,
    },
    groceryContainer: {
        backgroundColor: 'transparent',
        width: 110,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        //zIndex: 1,
        marginLeft: "69%",
        marginTop: "-35%",
    },
    groceryImage: {
        width: "100%",
        height: "100%",
    },
});

export default styles;