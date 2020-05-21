const reverseString = function(string) {
    let length = string.length
    let workingArray = string.split("")
    let newString = ""
    for (let i = length - 1; i > -1; i--) {
        newString += workingArray[i]
    }
    return newString
}

module.exports = reverseString
