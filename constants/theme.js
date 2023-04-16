import { Dimensions } from "react-native";
//import {vw, vh} from 'react-native-viewport-units';

const { width, height, fontScale } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const scaleFont = (size, factor = 0.5) => (size / factor);
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const COLORS = {
    primary: "#537CE3",
    secondary: "#B3C1E5",
    tertiary: "#C4D6F1",

    lightBlue: "#cadefc",
    lightBlue02: "#24335c",

    orange: "#FFC4AB",
    orange02: "#EE8A60",

    black01: "#060606",
    black02: "#282929",
    black03: "#282929",
    black04: "#343535",
    black05: "#383838",

    darkLila: "#5579d4",
  
    gray: "#83829A",
    gray2: "#C1C0C8",
    gray3: "#303543",
    gray4: '#d3d3d3',
    lightGray: "#e9ebf5",
    
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",

    transparentDarkGray: 'rgba(20,20,20, 0.2)',
  };
  
  //declaring something as const COLORS means that we cannot change the value of COLORS
  //it's a dictionary that contains all the colors we will use in the app
  //we access the colors using the dot notation e.g. COLORS.primary
  
  const FONT = {
    regular: "PoppinsRegular",
    medium: "PoppinsMedium",
    bold: "PoppinsBold",
    black: "PlayfairBlack"
  };
  
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
    xxxLarge: 38,

    width,
    height,
    fontScale,
  };
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { COLORS, FONT, SIZES, SHADOWS, scale, verticalScale, moderateScale, scaleFont };
  
  //this file is used to export all the colors, font, sizes and shadows we will use in the app