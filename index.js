const base64Decode = require('fast-base64-decode')
const { NativeModules } = require('react-native')

const LINKING_ERROR =
  `The package 'react-native-random-uuid' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n'

function randomUUID () {
  if (NativeModules.RandomUuid) {
    return NativeModules.RandomUuid.getRandomUuid()
  }

  if (NativeModules.ExpoRandom) {
    const data = new Uint8Array(16)

    base64Decode(NativeModules.ExpoRandom.getRandomBase64String(32), data)
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
