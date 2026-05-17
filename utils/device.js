import { Dimensions } from 'react-native';

const device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  isTablet: false,
};

export default device;
