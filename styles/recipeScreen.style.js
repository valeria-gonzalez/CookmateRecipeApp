import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, moderateScale, scale, verticalScale,
scaleFont } from "../constants";

const styles = StyleSheet.create({
    headerBarCont: {
        position: 'absolute',
        top: 5,
        left: 5,
        right: 0,
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small,
        paddingBottom: 10
    },
    headerBarBackBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.white
    },
    recipeCardHeaderCont: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden'
    },
    recipeInfoCont: {
        flexDirection: 'row',
        marginVertical: verticalScale(5),
        //height: 250,
        width: SIZES.width,
    },
    recipeInfoNameCont: {
        flex: 1.5,
        justifyContent: 'center',
        padding: 20
    },
    recipeInfoNameTxt: {
        fontFamily: FONT.black,
        color: COLORS.primary,
        fontSize: SIZES.xxxLarge-3,
    },
    recipeInfoPriceCont: {
        backgroundColor: COLORS.orange02,
        marginTop: 13,
        width: '40%',
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeInfoPriceTxt: {
        fontFamily: FONT.bold,
        color: COLORS.white,
        fontSize: SIZES.large
    },
    recipeInfoDescrTxt: {
        fontFamily: FONT.regular,
        color: COLORS.gray,
        fontSize: SIZES.medium,
    },
    ingredHeaderCont: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingRight: 30,
        marginBottom: SIZES.small,
    },
    ingredHeaderTxt: {
        flex: 1,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        fontSize: SIZES.large
    },
    ingredHeaderItemCntTxt: {
        fontFamily: FONT.regular,
        color: COLORS.black01,
        fontSize: SIZES.medium
    },
    recipeDirecCont: {
        paddingLeft: 10,
        paddingRight: 25
    },
    recipeDirecText: {
        fontFamily: FONT.bold,
        color: COLORS.primary,
        fontSize: SIZES.large,
        marginBottom: 10
    },
    recipeStepsTxt: {
        fontFamily: FONT.regular,
        color: COLORS.gray3,
        fontSize: SIZES.medium,
        lineHeight: 25,
        marginLeft: 10,
        marginTop: -5,
        marginBottom: 15
    },
    recipeSaveBtnCont: (pressed) => ({
        flexDirection: 'row',
        backgroundColor: pressed == true ? "#E9AA8E" : COLORS.orange02,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '104%',
        borderRadius: SIZES.xLarge
    }),
    recipeSaveBtnTxt: {
        fontFamily: FONT.bold,
        color: COLORS.white,
        fontSize: SIZES.xLarge 
    },
});

export default styles;