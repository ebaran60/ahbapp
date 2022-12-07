import {Dimensions, Platform, Image} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

export const {width, height} = Dimensions.get('window');
export const DEVICE_ID = DeviceInfo.getUniqueId();
export const VERSION = DeviceInfo.getVersion();

export const colors = {
  black: '#000',
  white:'#FFF',
  black800:'#1C1B1B',
  lightGray: '#F1F1F1',
  darkGray:'#313131',
  gray:'#606060'

};

export let headerConfig, headerConfigWithFile, imageToken;
export const setToken = async () => {
  try {
    headerConfig = await {
      headers: {Authorization: `Bearer ${storage.getString('USER_TOKEN')}`},
    };
    headerConfigWithFile = await {
      headers: {
        Authorization: `Bearer ${storage.getString('USER_TOKEN')}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    imageToken = (await '?token=') + storage.getString('USER_TOKEN');
  } catch (error) {}
};
