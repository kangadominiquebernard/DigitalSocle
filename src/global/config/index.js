import Config from 'react-native-config';
import CryptoJS from 'crypto-js';

const blurPhase = 'configM@n0bfuscation';

const pureRelay = tpyrc => Config.ENV === "dev" ? tpyrc : CryptoJS.AES.decrypt(tpyrc,blurPhase).toString(CryptoJS.enc.Utf8);

const API_URL = pureRelay(Config.API_URL);

const ENV = pureRelay(Config.ENV);

const version = pureRelay(Config.version);

export default {
    API_URL,
    ENV,
    version
};