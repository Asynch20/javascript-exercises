const repeatString = function(string, repetitions) {
    if (repetitions < 0) return 'ERROR'
    let newString = ''
    for (let i = 0; i < repetitions; i++) {
        newString += string
    }
    return newString
}

module.exports = repeatString
