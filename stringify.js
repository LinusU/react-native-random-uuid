module.exports = function stringify (data) {
  return (
    data[0].toString(16).padStart(2, '0') +
    data[1].toString(16).padStart(2, '0') +
    data[2].toString(16).padStart(2, '0') +
    data[3].toString(16).padStart(2, '0') +
    '-' +
    data[4].toString(16).padStart(2, '0') +
    data[5].toString(16).padStart(2, '0') +
    '-' +
    data[6].toString(16).padStart(2, '0') +
    data[7].toString(16).padStart(2, '0') +
    '-' +
    data[8].toString(16).padStart(2, '0') +
    data[9].toString(16).padStart(2, '0') +
    '-' +
    data[10].toString(16).padStart(2, '0') +
    data[11].toString(16).padStart(2, '0') +
    data[12].toString(16).padStart(2, '0') +
    data[13].toString(16).padStart(2, '0') +
    data[14].toString(16).padStart(2, '0') +
    data[15].toString(16).padStart(2, '0')
  )
}
