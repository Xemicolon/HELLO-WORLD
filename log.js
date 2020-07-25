exports.warning = (status, message) => {
    console.log('\u001b[' + 31 + 'm' +  status+ ' - ' + message + '\u001b[0m')
}

exports.info = (status, message) => {
    console.log('\u001b[' + 32 + 'm'  + status+ ' - ' + message + '\u001b[0m')
}

exports.success = (message) => {
    console.log('\u001b[' + 32 + 'm' + message + '\u001b[0m')
}