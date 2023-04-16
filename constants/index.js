import images from "./images";
import icons from "./icons";
import { COLORS, FONT, SIZES, SHADOWS, scale, moderateScale, verticalScale, scaleFont } from "./theme";
import dummyData from "./dummyData";
import dummyIngredients from "./dummyIngredients";
import { widthPixel, heightPixel, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from "./scales";
//importing the images, icons, colors, font, sizes and shadows from the theme file
//we import the images and icons from the images and icons files
//which are exported from each file

export { images, icons, COLORS, FONT, SIZES, SHADOWS, dummyData,
        scale, verticalScale, moderateScale, dummyIngredients,
        scaleFont, widthPixel, heightPixel, fontPixel, pixelSizeHorizontal, pixelSizeVertical
};

//this file is used to export all the constants we will use in the app