// import "@tbd54566975/web5-react-native-polyfills";
// import "./global";
// import "react-native-gesture-handler";
// import { polyfillBlob } from "./blob-polyfills";
// import { Crypto } from "@peculiar/webcrypto";

import "react-native-get-random-values";
import { Buffer } from "buffer";
global.Buffer = Buffer;

import {AppRegistry,  LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
