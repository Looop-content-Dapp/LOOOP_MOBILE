// import "@tbd54566975/web5-react-native-polyfills";
// import "./global";
// import "react-native-gesture-handler";
// import { polyfillBlob } from "./blob-polyfills";
// import { Crypto } from "@peculiar/webcrypto";

import "react-native-get-random-values";
import { BuildType, init } from "rn-okto-sdk";
import { Buffer } from "buffer";
global.Buffer = Buffer;

import {AppRegistry} from 'react-native';
import { registerGlobals } from 'react-native-webrtc';
import App from './App';
import {name as appName} from './app.json';
registerGlobals();

const apiKey = "YOUR_API_KEY";
init(apiKey, BuildType.SANDBOX);

AppRegistry.registerComponent(appName, () => App);
