const palindromes = function(str) {
    // /[^a-z]+/g - anything not in a-z
    lower = str.toLowerCase();
    forward = lower.replace(/[^a-z]+/g, "");
    reverse = "";
    for (let i=forward.length; i >= 0; i--) {
        reverse += forward.charAt(i);
    };
    if (forward == reverse) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
