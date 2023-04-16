import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, moderateScale, scale, verticalScale,
scaleFont } from "../constants";

const styles = StyleSheet.create({
    listHeaderCont: {
        //backgroundColor: COLORS.lightWhite,
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(20),
        paddingBottom: verticalScale(30),
    },
    headerText: {
        fontFamily: FONT.black,
        color: COLORS.primary,
        fontSize: scaleFont(SIZES.xxxLarge + 5, SIZES.fontScale),
    },
    searchCont:{
        backgroundColor: COLORS.lightGray,
        flexDirection: 'row',
        height: verticalScale(60),
        alignItems: 'center',
        marginHorizontal: scale(10),
        paddingHorizontal: scale(20),
        borderRadius: 30,
    },
    searchIcon: {
        color: COLORS.primary,
    },
    searchInput: {
        width: '80%',
        //backgroundColor: COLORS.orange,
        //alignSelf: 'center',
        marginLeft: scale(10),
        fontFamily: FONT.regular,
        fontSize: scaleFont(SIZES.medium, SIZES.fontScale),
    },
    ingrTitleCont: {
        //marginTop: verticalScale(20),
        //backgroundColor: COLORS.orange,
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ingredTitle: {
        fontFamily: FONT.bold,
        color: COLORS.primary,
        fontSize: scaleFont(SIZES.large, SIZES.fontScale),
    },
    ingredCountText: {
        fontFamily: FONT.regular,
        color: COLORS.gray,
        fontSize: scaleFont(SIZES.medium, SIZES.fontScale),
    },
    ingredCard: {
        flexDirection: 'row',
        paddingLeft: scale(20),
        paddingRight: scale(30),
        paddingVertical: verticalScale(7),
        marginHorizontal: scale(20),
        marginVertical: verticalScale(5),
        height: verticalScale(60),
        width: '90%',
        backgroundColor: COLORS.tertiary,
        borderRadius: 10,
    },
    iconCont: {
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(45),
        width: scale(45),
        borderRadius: 10,
        backgroundColor: COLORS.white,
    },
    ingredIcon: {
        height: verticalScale(40),
        width: scale(40),
    },
    ingredDescCont: {
        flex: 1,
        paddingHorizontal: scale(20),
        justifyContent: 'center',
    },
    ingredDescText: {
        fontFamily: FONT.regular,
        color: COLORS.gray3,
        fontSize: scaleFont(SIZES.medium, SIZES.fontScale),
    },
    deleteIconCont: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 20,
        //height: verticalScale(30),
        //width: scale(30),
        //backgroundColor: COLORS.orange,
    },
    deleteIcon: {
        color: COLORS.orange02,
    },
    
});

export default styles;
