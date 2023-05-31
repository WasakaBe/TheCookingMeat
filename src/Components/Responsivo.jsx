import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375; // iPhone 6 / 7 / 8 base width
export const Responsivo = (size) => ((width + height) / guidelineBaseWidth) * size;