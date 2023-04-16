import {PixelRatio} from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

function normalize(size, based = 'width'){
    const newSize = (based == 'height') ?
                    size * guidelineBaseHeight : size * guidelineBaseWidth;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size) => {
    return normalize(size, 'width');
  };
  //for height  pixel
  const heightPixel = (size) => {
    return normalize(size, 'height');
  };
  //for font  pixel
  const fontPixel = (size) => {
    return heightPixel(size);
  };
  //for Margin and Padding vertical pixel
  const pixelSizeVertical = (size) => {
    return heightPixel(size);
  };
  //for Margin and Padding horizontal pixel
  const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
  };
  export {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
  };