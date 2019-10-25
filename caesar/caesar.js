const caesar = function(str, n) {
    output = "";
    for(let i=0; i<str.length; i++) {
        let orig = str.charCodeAt(i);
        let final = orig;
        if (orig>=97 && orig<=122) { //lowercase
            final = orig + n;
            while (final < 97) {
                final += 26;
            }
            while (final > 122) {
                final -= 26;
            }
        } else if (orig>=65 && orig<=90) { //uppercase
            final = orig + n;
            while (final < 65) {
                final += 26;
            }
            while (final > 90) {
                final -= 26;
            }
        }
        output += String.fromCharCode(final);
    }
    return output;
}

module.exports = caesar
