const reverseString = function(str) {
    //first split string into an array
    inarr = str.split("");
    outarr = [];
    for (let i=0; i < (inarr.length); i++) {
        outarr[i] = inarr[inarr.length - 1 - i];
    }
    return outarr.join("");
}

module.exports = reverseString
