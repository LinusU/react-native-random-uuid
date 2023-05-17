const base64Decode = require('fast-base64-decode')
const { NativeModules, Platform } = require('react-native')

const stringify = require('./stringify')

const LINKING_ERROR =
  `The package 'react-native-random-uuid' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n'

function randomUUID () {
  if (NativeModules.RandomUuid) {
    return NativeModules.RandomUuid.getRandomUuid()
  }

  // Expo SDK 48+
  if (global.expo && global.expo.modules && global.expo.modules.ExpoCrypto && global.expo.modules.ExpoCrypto.randomUUID) {
    // ExpoCrypto.randomUUID() sometimes returns uppercase UUIDs, so we convert them to lowercase
    return global.expo.modules.ExpoCrypto.randomUUID().toLowerCase()
  }

  // Expo SDK 41-47
  if (NativeModules.ExpoRandom) {
    const data = new Uint8Array(16)

    base64Decode(NativeModules.ExpoRandom.getRandomBase64String(16), data)
    data[6] = (data[6] & 0x0f) | 0x40
    data[8] = (data[8] & 0x3f) | 0x80

    return stringify(data)
  }

  throw new Error(LINKING_ERROR)
}

if (typeof global.crypto !== 'object') {
  global.crypto = {}
}

if (typeof global.crypto.randomUUID !== 'function') {
  global.crypto.randomUUID = randomUUID
}
