const sumAll = function(low, high) {
  if (typeof low != "number" || typeof high != "number" || low < 0 || high < 0) {
    return "ERROR"
  } else {
    if (low > high) {
        let temp = low;
        low = high;
        high = temp;
    }
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
  }
}

module.exports = sumAll
