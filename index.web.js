const stringify = require('./stringify')

if (typeof crypto.randomUUID !== 'function') {
  crypto.randomUUID = function randomUUID () {
    const data = new Uint8Array(16)

    crypto.getRandomValues(data)
    data[6] = (data[6] & 0x0f) | 0x40
    data[8] = (data[8] & 0x3f) | 0x80

    return stringify(data)
  }
}
