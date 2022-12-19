/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs();//Ignore all log notifications

AppRegistry.registerComponent(appName, () => Router);
